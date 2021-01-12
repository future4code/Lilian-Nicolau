import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import { countries, country } from './countries'

const app: Express = express()

app.use(express.json())
app.use(cors())

const result = countries.map(country => ({
    id: country.id,
    name: country.name
}))

//(req: Request, res: Response) tem que colocar essa parte aqui para ele conseguir ler o res.

// app.get("/user",(req:Request,res:Response)=>{
//     tua lógica e depois aquela parte
//     res.status(200).send(result) ou como tu fez separado um res para cada 
//     })

res.status(200)
res.send(result)


// app.get('/test/hello', (req: Request, res: Response) => {
//    res.send(`Olá, mundo!`)
//  })

// app.get('/test/:number', (req: Request, res: Response) => {
//    if(isNaN(Number(req.params.number))){
//        res.send("").status(422);
//    }
//    res.send(
//      `Seu número da sorte é ${Number(req.params.number) + 3}!
//    `)
//  })

// app.post("/person/:cabelo", (req: Request, res: Response)=>{
//    //como lidar com post de /person

//    const senha: string = req.headers.senha as string;
//    const nome: string = req.body.nome;
//    const idade: string = req.query.idade as string;
//    const cabelo: string = req.params.cabelo;
//    res.status(200).send(`Olá, ${nome}! Sua senha é: ${senha}. Você tem ${idade} anos. Seu cabelo é ${cabelo}`);
// });

// app.get("/countries/all", (req: Request, res: Response) => {
//    res.status(200).send(countries)
// })

// app.get("/countries/search", (req: Request, res: Response) => {
//    const result: country[] = countries.filter(
//       country =>  country.name.includes(String(req.query.name))
//    )

//    res.status(200).send(result)
// })

// app.get("/countries/:id", (req: Request, res: Response) => {
//    const result: country | undefined = countries.find(
//       country => country.id === Number(req.params.id)
//    )

//    res.status(200).send(result)
// })

// app.delete("/countries/:id", (req:Request, res:Response)=>{
//    let errorCode: number = 400
//    //inicio de um sonho
//    try {

//       if(!req.headers.authorization){
//          errorCode = 401
//          throw new Error()
//       }

//       const countryIndex: number = countries.findIndex(
//          (country) => country.id === Number(req.params.id)
//       )

//          if(countryIndex === -1){
//             errorCode = 404
//             throw new Error()
//          }

//       countries.splice(countryIndex, 1)
// //deu tudo certo
//       res.status(200).end()
//    } catch (error) {
//       //deu tudo errado
//       console.log(error)
//       res.status(errorCode).end()
//    }
// })

// app.listen(3003, () => {
//    console.log("Servidor rodando na porta 3003")
// })