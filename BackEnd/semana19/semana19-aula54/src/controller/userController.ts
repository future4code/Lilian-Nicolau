import {Request, Response} from "express";
import {businessSignup, businessLogin} from "../business/userBusiness";
import {user, loginInput} from "../business/entities/user";
import token from "../business/userBusiness";
import { searchUserByEmail, deleteUser} from "../data/userDatabase";
import {generateToken, getTokenData} from "../business/services/authenticator"
import {compare} from "../business/services/hashManager"

let errorCode: number = 400

export const userSignup = async (req: Request, res: Response): Promise <void> => {
    try {
        const {name, email, password, role} = req.body as user

        const token = await businessSignup(
           
            name,
            email,
            password,
            role
         )
        
        res.status(200).send({"Usuário criado":token})

    } 
    
    catch(error){
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
}


export const userLogin = async(req: Request, res: Response): Promise <void> => {
    try{

        const {email, password} = req.body as loginInput

        const user = await businessLogin(email, password)
        
        res.status(200).send({message: "You are loged in",token})
    
    }catch(error){
        res.status(errorCode).send(error.sqlMessage || error.message)
}
}

export async function getUserByEmail (req: Request, res: Response) {

    const userData = {
        email: req.body.email,
        password: req.body.password
   
    }
    
    try {

        if(!req.body.email || !req.body.password){
            throw new Error("Preencha os campos email e senha corretamente")
        }

    const user = await searchUserByEmail(userData.email)

    if(!userData){
        
        throw new Error("Usuário não encontrado")
    }

    const compareResult = await compare(
        userData.password,
        user.password
      );
           
          if (!compareResult) {
            throw new Error("Senha inválida");
          }

    const token = generateToken ({
            id: user.id,
            role: user.role
        })

        res.status(200).send({
            token,
        })

    } catch (error) {
        res.status(400).send ({
            message: error.message || error.sqlMessage
        })
    }
}

export async function removeUserById (req: Request, res: Response) {
    try {
        const token = req.headers.authorization as string

        const authenticationData = getTokenData(token)

        
        res.sendStatus(200)

    } catch (err) {
        res.status(400).send({
          message: err.message,
        });
      }
}

export default searchUserByEmail;
