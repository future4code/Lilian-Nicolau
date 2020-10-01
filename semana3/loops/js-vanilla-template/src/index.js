//Exercícios de intepretação de código.
//Exercício 1
/*
let valor = 0
for(let i = 0; i < 5; i++) {
  valor = valor + i
}
console.log(valor)
*/

//Exercício 2
/*
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
for (let numero of lista) {
  if (numero > 18) {
    console.log(numero);
  }
}
//a) Serão impressos os números 19, 21, 23, 25, 27, 30

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
let contador = 0;

for (let numero of lista) {
  console.log("O " + numero + " está no index " + contador);
  contador++;
}
//b) Sim, seria possível acessar os elementos do array usando for... of...(ver código acima).
*/

//Exercício de escrita de código
//a) Imprimindo o array original:
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < arrayOriginal.length; i++) {
    const elementos = arrayOriginal[i]
    console.log(elementos)
}
*/
//b) Imprimindo elementos do array original divididos por 10:
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for (let i = 0; i < arrayOriginal.length; i++) {
    const elementos = arrayOriginal[i] / 10
    console.log(elementos)
}
*/
//c) Um novo array contendo somente os números pares do array original:
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let arrayPares = [];

for (let numerosPares of arrayOriginal) {
  if (numerosPares % 2 === 0) {
    arrayPares.push(numerosPares);
  }
}
console.log(arrayPares);
*/
//d) um novo array contendo strings, da seguinte forma: "O elemento do índex i é: numero"
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

let contador = 0;

for (let numero of arrayOriginal) {
  console.log("O elemento do index " + contador + " é: " + numero);
  contador++;
}
*/
//e) imprima no console o maior e o menor números contidos no array original:
// A frase impressa foi: O maior número é 130 e o menor número é 21
/*
const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];
let menorNumero = arrayOriginal[0];
let maiorNumero = arrayOriginal[0];

for (let numero of arrayOriginal) {
  if (maiorNumero < numero) {
    maiorNumero = numero;
  }
  if (menorNumero > numero) {
    menorNumero = numero;
  }
}

console.log(
  "O maior número é " + maiorNumero + " e o menor número é " + menorNumero
);
*/


