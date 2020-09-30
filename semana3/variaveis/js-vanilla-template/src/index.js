//Exercício 1
/*
a = 10;
b = 10;

console.log(b); //Aqui será impresso o número 10

b = 5;
console.log(a, b); //Aqui serão impressos os números 10 e 5
*/

//Exercício 2
/*
a = 10;
b = 20;
c = a;
b = c;
a = b;

console.log(a, b, c); // Aqui serão impressos os valores  10, 10, 10
*/

//Exercício 1 - escrita de código
/*
let nome;
let idade;
typeof nome; //não consegui imprimir o typeof
typeof idade;
// se tivesse dando certo, nome seria string e idade numbers
*/

/*let nome 
let idade
nome = prompt("Qual é o seu nome?")
idade = prompt("Qual é a sua idade?")
console.log("Olá ", nome, "você tem ", idade, "anos.")
*/

//Exercício 2
/*
let endereco;
let profissao;
let hobby;
let nomePet;
let comidaFavorita;
endereco = prompt("Qual é o seu endereço?");
profissao = prompt("Qual é a sua profissão");
hobby = prompt("Qul é o seu hobby");
nomePet = prompt("Qual o nome do seu pet?");
comidaFavorita = prompt("Qual é a sua comida favorita?");
console.log("Qual é o seu endereço? Resposta:", endereco);
console.log("Qual é a sua profissão? Resposta:", profissao);
console.log("Qual é o seu hobby? Resposta:", hobby);
console.log("Qual é o nome do seu pet? Resposta:", nomePet);
console.log("Qual é a sua comida favotira? Resposta:", comidaFavorita);
*/

//Exercício 3
/*
let arrayComidasFavoritas = ["churrasco", "massas", "morango", "caldo", "salada"]
console.log(arrayComidasFavoritas)
console.log("Essas são minhas comidas favoritas:")
console.log(arrayComidasFavoritas[0])
console.log(arrayComidasFavoritas[1])
console.log(arrayComidasFavoritas[2])
console.log(arrayComidasFavoritas[3])
console.log(arrayComidasFavoritas[4])
comidaFavorita = prompt("Qual a sua comida favorita?")
arrayComidasFavoritas [1] = comidaFavorita
console.log(arrayComidasFavoritas)
*/

//Exercício 4
let arrayPerguntas = [
  "Você está feliz?",
  "Você gosta da cor roxa?",
  "Você sabe sambar?",
];
console.log(arrayPerguntas);
let arrayRespostas = [false, true, true];
console.log(arrayPerguntas[0], arrayRespostas[0]);
console.log(arrayPerguntas[1], arrayRespostas[1]);
console.log(arrayPerguntas[2], arrayRespostas[2]);
