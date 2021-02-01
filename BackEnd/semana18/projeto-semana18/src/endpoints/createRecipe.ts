import {Request, Response} from "express";
import { insertRecipe} from "../data/insertRecipe";
import { userLogin} from "../endpoints/userSignIn"
import { recipeInput } from "../types/types";

let errorCode: number = 400

export const recipe = async (req: Request, res: Response): Promise <void> {
    try {
        const date = new Date;
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = String(date.getFullYear());
        const recipeDate = (`${day}/${month}/${year}`)

        const recipeData: recipeInput = {
            id: recipeId,
            title: title,
            description: description,
            date: recipeDate,
            user_id: findUser.id
        }

        await insertRecipe(recipeData)
        res.status(200).send({message: "Recipe created"})

    }





    

    catch (error) {
        res.status(errorCode).send({message:error.message})
    }
}