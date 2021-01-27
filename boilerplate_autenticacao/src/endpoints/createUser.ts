import {Request, Response} from "express";
import insertUser from "../data/insertUsers"
import {generateId} from "../services/idGenerator";
import {generateToken} from "../services/authenticator"


export default async function createUser (req: Request, res: Response) {
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

    await insertUser(
        req.body.email,
        req.body.password, 
        id

    );

    const token = generateToken(id)
        
    res
        .status(200)
        .send({token});

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}