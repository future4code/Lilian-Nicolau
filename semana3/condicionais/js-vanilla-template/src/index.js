// Exercícios de interpretação de código
/*  Exercício 1
O enunciado desse exercício me lembra da pergunta feita no challenge do dia 30, que nos pedia para escrever um código que lesse se um número era par ou ímpar e que imprimisse o resultado na tela. 
Esse código 1 faz exatamente isso, ele testa se o número digitado pelo usuário é par ou ímpar. Ele imprime "Passou no teste" para números pares e "Não passou no teste" para números ímpares. 
        
    Exercício 2
a) O código serve para o usuário pesquisar o preço das frutas.
b) O preço da fruta maçã é R$ 2.25
c) Creio que o computador não conseguiria ler o preço de pera e ele iria direto para o próximo item, default. Daí a mensagem seria "O preço da fruta default é R$ 5
    Exercício 3
a) Na primeira linha temos uma variável que é um number. Esse number será perguntando ao usuário e ele terá que digitá-lo.
b) Caso o usuário digite o número 10, a mensagem será "Esse número passou no teste" Se ele digitar -10, creio que não haverá mensagem nenhuma.
c) Sim haverá erro no console porque, de acordo com os slides da aula, o computador não leria o console.log(mensagem) porque a variável está dentro de um escopo filho, e o escopo pai não pode ler o que está no escopo filho. 
*/
//Exercícios de escrita de código

// Exercício 4
/*
const idade = Number(prompt("Quantos anos você tem?"))
if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}
*/
// Exercício 5

/*const turno = prompt("Em que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)").toUpperCase()

if(turno === "M") {
    console.log("Bom dia!")
} else if(turno === "V") {
    console.log("Boa tarde!")
} else {
    console.log("Boa noite")
}
*/
//  Exercício 6
/*
const turno = prompt("Em que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno).").toUpperCase()
switch(turno) {
    case "M":
    console.log("Bom dia!")
    break
    case "V":
    console.log("Boa tarde!")
    break
    case "N":
    console.log("Boa noite!")
    break
    default:
        console.log("Em que turno você estuda? Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
    break
}
*/
//  Exercício 7 + desafio 1
/*
const filme = prompt("Que tipo de filme você quer ver?").toLowerCase()
const preco = Number(prompt("Quanto custa o ingresso?"))
const snack = prompt("Que snack você quer comprar?").toLowerCase()
if (filme === "fantasia" && preco <= 15) {
    console.log("Bom filme! " + "... com " + snack)
} else {
    console.log("Escolha outro filme :(")
}
*/
