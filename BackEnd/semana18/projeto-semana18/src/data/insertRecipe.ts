import {connection} from "../connection/connection";
import { cookenuUser } from "../types/types";

export const insertRecipe = async (id: string, title: string, description: string, creation_date: Date, author_id: string, cookenu_users_id: cookenuUser): Promise <void> => {
    await connection
    .insert({
        id: id,
        title: title,
        description: description,
        creation_date: creation_date,
        author_id: author_id,
        cookenu_user_id: cookenu_users_id

    }). into("Cookenu_Recipes")
}