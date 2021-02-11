import {insertUser, searchUserByEmail, deleteUser} from "../data/userDatabase";
import {user, loginInput, USER_ROLES} from "../business/entities/user";
import {generateToken, getTokenData} from "../business/services/authenticator";
import {generatedId} from "../business/services/idGenerator";
import {hash, compare} from "../business/services/hashManager";
import compareResult, { userLogin } from "../controller/userController";
import authenticationData from "../controller/userController"


export const businessSignup = async (
    
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
 ) => {
    if (!name || !email || !password || !role) {
        throw new Error ("Please, enter the information required")
    }

    if (!email.includes("@")) {
        throw new Error ("Invalid email")
    }

    if (password.length<6) {
        throw new Error ("Enter at least 6 characters")
    }
    const userId: string = generatedId()
        const hashPassword: string = await hash(password)
        await insertUser (userId, name, email, hashPassword, role)
        const token: string = generateToken({id:userId, role})

        return token
}

export const businessLogin = async (
    email: string,
    password: string
 ) => {
    if (!user) {
        throw new Error("User not found")
    }
    if(!email || !password) {
        throw new Error("Please, enter correct email and password")
    }

    if (!email.includes("@")) {
        throw new Error ("Invalid email")
    }

    if (password.length<6) {
        throw new Error ("Enter at least 6 characters")
    }
    
        if (!compareResult) {
            throw new Error("Invalid password")
        }

        const token = generateToken({id:user.id, role: user.role})
    } 

    export const businessDelete = async (
        name: string,
        email: string,
        password: string,
        role: USER_ROLES
     ) => {
        if (authenticationData.role !== "ADMIN") {
            throw new Error("Only ADMIN allowed")
        }

        const id = req.params.id

        await deleteUser(id)

    }

    export default businessSignup;

    

 