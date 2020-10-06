// Exercícios de interpretação de código

/* Exercício 1
a) Vão aparecer os números  10 e 50.
b) Creio que apareceria erro porque minhaFuncao deveria estar em uma constante.
*/

/*Exercício 2
a)  Estarão impressos no console os nomes "Darvas" e "Caio".
b) Seriam impressos no console os nomes "Amanda" e "Caio". 
Obs: para confirmar a resposta, eu joguei no console e retornou erro porque a const outraFuncao já havia sido declarada. 
*/

/*Exercício 3
Essa função faz com que o array "ganhe" valores através do push. Eu trocaria o nome de const metodo para const buscaParidade.


const metodo = (array) => {
    let arrayFinal = [];
    for (let x of array) {
          if (x % 2 === 0) {
          arrayFinal.push(x * x)
          }
    }
    return arrayFinal;
  }
  const resultado = metodo([1,2,3,4])
  console.log (resultado)
  */

//Exercício 4
/* a)
  console.log("Eu sou Lilian, tenho 37 anos, moro em Nova Mutum e sou professora.")
  */

/* b)
  let nome = prompt("Digite o seu nome");
let idade = Number(prompt("Qual é a sua idade?"));
let cidade = prompt("Em que cidade você mora?");
let estudante = prompt("Você é estudante? Sim ou não?");

let informacoesPessoais = (informacoes) => {
  if (estudante === "sim") {
    estudante = "sou estudante.";
  } else {
    estudante = "não sou estudante.";
  }

}
const resultado = informacoesPessoais(nome, idade, cidade, estudante);

console.log(  "Eu sou " + nome + ", tenho " + idade + " anos, moro em " + cidade + " e " + 
    estudante);
*/

//Exercício 5

/*a) 

let somaDoisNumeros = (a,b) => {
    return a + b
}

const resultado = somaDoisNumeros(4,6)
console.log(resultado)*/

/* b)
let maiorNumero = (a,b) => {
    if (a >= b) {
    return true
} else {
    return false
}
}

const resultado = maiorNumero(250, 200)
console.log(resultado) */

/* c)
const mensagem = () => {
    
    return "Olá"  
} 

const resultado = mensagem()

console.log (resultado.repeat(10)) */

//Exercício 6

/* 
a)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let numeroElementos = (array) => {
    return array.length
}

const resultado = numeroElementos(array)
console.log(resultado) */

/* b)
const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

let paridadeDoArray = (array) => {
    if(array % 2 === 0) {
    return ("é par")
} else {
    return ("é ímpar")
}
}

const resultado = paridadeDoArray(10)
console.log(resultado) */

const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22];

let numerosParesNoArray = (array) => {
  if (array % 2 === 0) {
   console.log(numerosParesNoArray.push(array[])) 
  return array.length
}
}

const resultado = numerosParesNoArray()
console.log(resultado)
