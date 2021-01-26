import knex from "knex";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { AddressInfo } from "net";
import createUser
 from "../src/endpoints/createUser"


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors())

app.post("/user/signup", createUser)



const server = app.listen(process.env.PORT || 3000, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});