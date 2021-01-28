import {Request, Response} from "express";
import insertUser from "../data/insertUsers"
import {generateId} from "../services/idGenerator";
import {generateToken} from "../services/authenticator"
import {hash} from "../services/hashManager"
import { USER_ROLES } from "../types/types";


export default async function createUser (req: Request, res: Response) {
    
    const userData = {
        email: req.body.email,
        password: req.body.password,
        role: req.body.role
      };

    try {
        if(!req.body.email || !req.body.password) {
            throw new Error ("Preencha os campos e-mail e senha, por favor")
        }
        if (!req.body.email.includes("@")){
            throw new Error ("E-mail inválido")
        }
        if (req.body.password.length < 6) {
            throw new Error ("Senha deve ter mais de 6 caracteres")
        }
    const id: string = generateId();

    const hashPassword: string = await hash(userData.password) 


    await insertUser(
        userData.email,
        hashPassword, 
        id,
        userData.role
    );

    const token = generateToken({
        id,
        role: userData.role
    })

    res
        .status(200)
        .send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}