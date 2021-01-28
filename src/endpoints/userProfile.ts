import { Request, Response } from "express";
import searchUserProfile from "../data/searchProfile";
import {getTokenData} from "../services/authenticator";

export default async function seeUserProfile (req: Request, res: Response) {

    const token = req.headers.authorization as string;

    const authenticationData = getTokenData(token);
       
    try {
        const user = await searchUserProfile(authenticationData.id)

        if (!req.body.token) {
            throw new Error ("Informe o token do usuário")
        }
    
        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error) {
        res.status(400).send ({
            message: error.message || error.sqlMessage
        })
    }
}