import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import {countries, country} from './countries'

cont app: Express = express()

app.use(express.jason())
app.use(cors())

app.get('/test/hello', (req: Request, res: Response) => {
    res.send(`Olá, mundo!`)
  })

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
 })