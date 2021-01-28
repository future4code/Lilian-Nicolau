import { Request, Response } from "express";
import searchUserByEmail from "../data/searchEmail";
import {generateToken} from "../services/authenticator";
import {compare} from "../services/hashManager";


export default async function getUserByEmail (req: Request, res: Response) {

    const userData = {
        email: req.body.email,
        password: req.body.password,
        id: req.body.id
    }
    try {
        const user = await searchUserByEmail(userData.email)

        const compareResult = await compare(
            userData.password,
            user.password
          );
      
          if (!compareResult) {
            throw new Error("Senha inválida");
          }

        if (!req.body.email) {
            throw new Error ("Usuário não encontrado")
        }

        // if (user.password !== userData.password) {
        //     throw new Error ("Senha inválida")
        // }    

        const token = generateToken ({
            id: user.id,
            role: user.role

        res.status(200).send({
            token,
        })

    } catch (error) {
        res.status(400).send ({
            message: error.message || error.sqlMessage
        })
    }
}