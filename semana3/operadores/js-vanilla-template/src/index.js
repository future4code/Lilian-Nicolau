const bool1 = true
const bool2 = false
const bool3 = !bool2

/*
Interpretação de código - exercício 1
let resultado = bool1 && bool2
console.log("a. ", resultado)
False

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
False

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)
False

console.log("e. ", typeof resultado)
Boolean
*/

/*
let array
console.log('a. ', array)
//[]

array = null
console.log('b. ', array)
//null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11

let i = 0
console.log('d. ', array[i])
//3

array[i+1] = 19
console.log('e. ', array)
//Aqui troca o valor 4 por 19 (i+1 significa elemento na posição 1, começa d0 0)
// [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)
//9 (i é a posção 0, 3+6)
*/

//Escrita de código - exercício 1
/*
const idadeSua = prompt("Qual é a sua idade?")
const idadeAmigo = prompt("Qual é a idade do seu melhor amigo?")
const idadeMaior = Number(idadeSua) > Number(idadeAmigo) 
console.log(idadeMaior)
const diferecaIdade = Number(idadeSua) - Number(idadeAmigo)
console.log(diferecaIdade)
*/

//Exercício 2
/*
const numeroPar = prompt("Digite um número par")
const resto = Number(numeroPar) % 2
console.log(resto)
//Todos os números pares voltam com resto 0.
//Se eu imprimo um número ímpar, ele me devolve o resto da divisão, por exemplo, 15/2 retorna resto 1.
*/

//Exercício 3
/*
let arrayListaDeTarefas = []
const tarefa1 = prompt("Escreva uma tarefa que precisa fazer hoje.")
const tarefa2 = prompt("Escreva uma tarefa que precisa fazer hoje.")
const tarefa3 = prompt("Escreva uma tarefa que precisa fazer hoje.")
arrayListaDeTarefas.push(tarefa1, tarefa2, tarefa3)
console.log(arrayListaDeTarefas)
let indice = prompt("Que tarefa você já realizou? Digite 0, 1 ou 2")
arrayListaDeTarefas.splice(Number(indice), 1)
console.log(arrayListaDeTarefas)
*/

//Exercício 4
/*
let nomeDoUsuario = prompt("Qual é o seu nome?")
let emailDoUsuario = prompt("Qual é o seu e-mail?")
console.log("O e-mail " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vinda(o) " + nomeDoUsuario + "." )
*/

//Desafios
//1
/*
let grausFahrenheit = 77
const kelvin = (grausFahrenheit - 32)*5/9 + 273.15
console.log(kelvin)
let grausCelsius = 80
let Fahrenheit = (grausCelsius)*9/5 + 32
console.log(Fahrenheit)
let celsius = 30
let fahren = (celsius)*9/5 + 32
let kel = (fahren - 32)*5/9 + 273.15
console.log(fahren, kel)
*/
/*
const celsius = prompt("Que valor em celsius você quer converter?")
let fahr = Number(celsius)*9/5 + 32
let kel = (fahr - 32)*5/9 + 273.15
console.log(fahr, kel)
*/







