//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: string,
    age: number
}


let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]




const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });
  
//Exercício 1
//a) Devo usar o método get para buscar todos os usuários da lista
//b) Indicamos a entidade na função app.get ou app.put, ex. app.get("entidade", )
// // usamos o método get para buscar dados e a entidade usada foi /users/all
// app.get("/users/all",(req:Request,res:Response)=>{
//     res.status(200).send(users)
// })


//Exercício 2
//Primeiro, criar o type:
// type user = {
//     id: number,
//     name: string,
//     email: string,
//     type: string,
//     age: number
// }
//a) como string - usando path params
//b) nesse caso, não poderia tipar type como string, teria que ser assim:
// //type user = {
//     id: number,
//     name: string,
//     email: string,
//     type: UserType,
//     age: number
// }

// enum UserType {
//     ADMIN = "ADMIN",
//     NORMAL = "NORMAL"
// }
// //Dessa forma podemos restringir os tipos a apenas os tipos acima e atirar um erro, caso o dado esteja fora do esperado.

//Exercício 3
app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400
    
    try {
        const userName: string = req.query.name as string
        if(!userName) {
            errorCode = 422
            throw new Error("Nome inválido ou campo vazio")
        }

        const findUser = users.filter((user =>
            user.name.toUpperCase()===userName.toUpperCase()
            ))

            if(!findUser){
                errorCode = 404
                throw new Error("Nome não encontrado")
            }
            res.status(errorCode).send(findUser)
    }catch (error) {
        res.status(errorCode).send(error.message)

    }
})

//Exercício 4

app.post("/user", (req: Request, res:Response) => {
    let errorCode: number = 400

    try{
        const newUser: user = {
            id: new Date().getDate(), //ou Date.now //eles geram uma id usando a hora exata
            name: req.body.name,
            email: req.body.email,
            type: req.body.type,
            age: req.body.age
        }

        if(!newUser.age || !newUser.email || !newUser.name || !newUser.type){
            errorCode = 422
            throw new Error("Preencha corretamente os dados.")
        }

        users.push(newUser)
        res.status(200).send({message:"Usuário inserido com sucesso"})

    } catch (error) {
        res.status(errorCode).send({message: error.message})

    }

})
//a)//a) foi mudado para put, não mudou nada além do método
//b) Não considero apropriado, pois no CRUD usamos o POST para criar e o PUT para editar

//Exercício 5
app.put("/users/:id",(req:Request,res:Response)=>{

    try{
        const updateUser:{id:number,name:string}={
            id:Number(req.params.id),
            name:req.body.name
        }

        if(isNaN(Number(updateUser.id))){
            errorCode=422
            throw new Error('Id Inválido')
        }

        const myUserIndex = users.findIndex((user=>   //não sei de onde tirou o findIndex
            user.id===Number(updateUser.id)
        ))
        
        if(myUserIndex === -1){
            errorCode=404
            throw new Error('Usuário não encontrado')
        }
        users[myUserIndex].name=updateUser.name
        res.status(200).send({message:'Usuário alterado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})

//Exercício 7
app.delete("/users/:id",(req:Request,res:Response)=>{

    try{
        const deleteUser:{id:number}={
            id:Number(req.params.id),            
        }

        if(isNaN(Number(deleteUser.id))){
            errorCode=422
            throw new Error('Id Inválido')
        }

        const myUserIndex = users.findIndex((user=>
            user.id===Number(deleteUser.id)
        ))
        
        if(myUserIndex === -1){
            errorCode=404
            throw new Error('Usuário não encontrado')
        }
        users.splice(myUserIndex,1)
        res.status(200).send({message:'Usuário deletado com sucesso !'})        
    }
    catch(error){
        res.status(errorCode).send(error.message)
    }
})
