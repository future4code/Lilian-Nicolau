import knex from "knex";
import dotenv from "dotenv";
import { USER_ROLES } from "../types/types"

dotenv.config();

export default async function insertUser (
    email: string, 
    password: string, 
    id: string,
    role: USER_ROLES
    ) {
    await connection
    .insert ({
        email,
        password,
        id,
        role
    })
    .into("Users")
}

export const connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT || "3306"),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  });
