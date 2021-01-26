import knex from 'knex';
import dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import { AddressInfo } from "net";

dotenv.config();

const app = express();

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
    } else {
      console.error(`Failure upon starting server.`);
    }
  });

const connection  = knex ({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
  },
}); 

//Exercício 1 - b) faça uma função que busque um ator pelo nome
    const getActorByName = async (name: string): Promise <any> => {
        const result = await connection.raw (`
            SELECT * FROM Actor WHERE name = "${name}"
        `)
        console.log(result[0] [0])
        return result[0] [0]
    }
        //getActorByName("Fernanda Montenegro")

    //Exercício 1 - c) 
    const getActorByGender = async (gender: string): Promise <any> => {
        const result = await connection.raw (`
            SELECT COUNT (*) as count FROM Actor WHERE gender = "${gender}"
        `)
         console.log(result[0][0])
        return result [0] [0]
    }
        // getActorByGender("male")
    
    //Exercício 2 - a)
          
    const updateActor = async (id: string, salary: number): Promise<void> => {
        await connection("Actor")
            .update({
                salary: salary,
              })
            .where("id", id);
        };
          //updateActor("035", 900000)
       
    // Exercício 2 - b)
    const deleteActorById = async (id: string): Promise<void> => {
        await connection("Actor")
        .delete()
        .where("id", id)
    };
        //deleteActorById("003")

    // Exercício 2 - c)
    const getAverageSalaryByGender = async (gender: string): Promise<any> => {
        const result = await connection.raw (`
            SELECT AVG(salary) FROM Actor WHERE gender = "${gender}"
        `)
            console.log(result[0][0])
            return result [0] [0]
    }
        //getAverageSalaryByGender("male")

    // Exercício 3 - a)
    const getActorById = async(id: string): Promise<any> => {
        
            const result: any = await connection.raw (`
            SELECT * FROM Actor WHERE id = "${id}"
            `)
     
            console.log(result[0][0])
            return result [0][0];
           
        } 
     
    
    app.get("/actor", async (req: Request, res: Response) => {
        try {
          const id: string  = req.query.id as string;
          const actor = await getActorById(id);
      
          res.status(200).send(actor)
        }catch (err) {
            res.status(400).send(err.message);
          }
        })
    
    // Exercício 3 - b)
    const getQuantityActorByGender = async(gender:string): Promise <any> => {
       
            const result: any = await connection.raw(`
            SELECT COUNT(gender) FROM Actor Where gender = "${gender}"
            `)
     
            console.log(result[0][0])
            return result [0];
           
    }
        
    app.get("/actor", async (req: Request, res: Response) => {
        try {
          const gender: string = req.query.gender as string
          const actors = await getQuantityActorByGender(gender);
          res.status(200).send(actors); 
        }catch (err) {
          res.status(400).send(err.message);
        }
      })
    
    


 