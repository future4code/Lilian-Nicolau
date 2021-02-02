import {connection} from "./connection"
import { USER_ROLES } from "../business/entities/user"


export async function insertUser (
    id: string,
    name: string,
    email: string, 
    password: string, 
    role: USER_ROLES
    ) {
    await connection
    .insert ({
        id,
        name,
        email,
        password,
        role
    })
    .into("Users")
}

export async function searchUserByEmail (email: string) {
    const result: any = connection
    .select ("*")
    .from ("Users")
    .where ({email})

    return result [0]
}

export async function deleteUser (id: string) {
    const result: any = connection
    .delete ("*")
    .from ("Users")
    .where ({id})

    return result [0]
}


