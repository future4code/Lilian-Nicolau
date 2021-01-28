import {connection} from "../data/insertUsers";

export default async function searchUserByEmail (email: string) {
    const result: any = connection
    .select ("*")
    .from ("User")
    .where ({email})

    return result [0]
}