import {connection} from "./insertUsers";

export default async function searchUserProfile (id: string) {
    const result: any = connection
    .select ("*")
    .from ("User")
    .where ({id})

    return result [0]
}