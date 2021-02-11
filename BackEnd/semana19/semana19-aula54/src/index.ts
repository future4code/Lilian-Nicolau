import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import createUser from "./controller/createUser"
import getUserByEmail from "./controller/getUser";
import seeUserProfile from "./controller/userProfile";
import removeUserById from "./controller/deleteUser";


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.post("/user/signup", createUser)
app.post("/user/login", getUserByEmail)
app.get("user/profile", seeUserProfile)
app.delete("user/:id", removeUserById)

const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});