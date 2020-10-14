//Exercícios de interpretação de código

/* 1. Aqui estamos convertendo dólares em reais. Nesse caso, se pede para converter 100 dólares em reais usando a cotação digitada pelo usuário.

2. Esse exercício é um laço que calcula o valor de cada investimento na função; caso o investimento digitado esteja incorretoo, o programa dispara um alerta de incorreto. Essa função pede para retornar 150 reais investidos em ações e 200 reais investidos no tesouro direto. 

3. Essa função pede o tamanho do array original, o tamanho do array de números pares e o tamanho do array de números ímpares.

4. Eu acho que no console.log(número1), o código vai imprimir todos os elementos do array, já que infinity, ao meu ver, engloba todos os números. No console.log(numero2), o código vai imprimir todos os elementos do array que forem maior que zero. */

//Exercícios de lógica de programação

// 1. Podemos percorrer uma lista usando condicional, laço e função. 

/*const numeros = [3,7,9,13,24,48,52,78]
for(let i = 0; i < numeros.length; i++) {
 let elemento = numeros [2]
 console.log(elemento) 
} */

//2. a) False  b) False  c) True  d) False  e) False 

//3. O código do colega não funciona, ele fica rodando infinitamnte no console.

 /*let numero = Number(prompt("Digite um número"))   ****INCOMPLETO****

let quantidadeDeNumerosPares = (numero) => {
    while(i <= quantidadeDeNumerosPares) {
        console.log(2*i + 1)
    }
} */

//Exercício 4

/*let ladoA = Number(prompt("Digite o tamanho do lado A do seu triângulo"))
let ladoB = Number(prompt("Digite o tamanho do lado B do seu triângulo"))
let ladoC = Number(prompt("Digite o tamanho do lado C do seu triângulo"))

if(ladoA === ladoB && ladoB === ladoC && ladoC === ladoA) {
    console.log("O triângulo é equilátero.") 
 } else if(ladoA === ladoB && ladoB !== ladoC || ladoB === ladoC && ladoC !== ladoA || ladoC === ladoA && ladoA !== ladoB) {
        console.log("O triângulo é isósceles.") 
  } else if(ladoA !== ladoB && ladoB!== ladoC && ladoC !== ladoA) {
            console.log("O triângulo é escaleno.")
        } */

//Exercício 5

/*let numeroA = Number(prompt("Digite um número"))
let numeroB = Number(prompt("Digite outro número"))

if (numeroA > numeroB){
    console.log("O maior é " + numeroA)
    console.log("A diferença entre eles é " + (numeroA - numeroB))
} else {
    console.log("O maior é " + numeroB)
    console.log("A diferença entre eles é " + (numeroB - numeroA))
}
if (numeroA % numeroB === 0) {
    console.log(numeroA + " é divisível por " + numeroB)
} else if (numeroB % numeroA === 0) {
    console.log(numeroB + " é divisível por " + numeroA)
} else if (numeroA % numeroB !== 0) {
    console.log(numeroA + " não é divisível por " + numeroB)
} else if (numeroB % numeroA !== 0) {
    console.log(numeroB + " não é divisível por " + numeroA)
} */

//Exercícios de Funções

/*const array = [10,20,30,40,50]

 let segundoMaiorNumero = (array) => {
     return array[3]
 }
 const resultado = segundoMaiorNumero(array)
 console.log(resultado)

    let segundoMenorNumero = (array) => {
        return array[1]
    }
    const resultadoDois = segundoMenorNumero(array)
    console.log(resultadoDois)*/

//2.
/*function hello() {
    alert("Hello, Future4")
}
hello() */

// Exercícios de Objetos

//1. Em um array não consigo separar meus elementos em várias "classes"; em um objeto, consigo essa separação através das chaves.

//2. 
/*const criaRetangulo = {
    lado1: 10,
    lado2: 5
}
const largura = criaRetangulo.lado1 
const altura = criaRetangulo.lado2
const perimetro = (criaRetangulo.lado1 + criaRetangulo.lado2) * 2
const area = criaRetangulo.lado1 * criaRetangulo.lado2
console.log(largura, altura, perimetro, area) */

//3.
/*const filme = {
    titulo: 'O rei Leão',
    ano: 1994,
    diretor: 'Roger Allers',
    elenco: ["Matthew Broderick", "James Earl Jones"]
}
console.log("Venha assistir ao " + filme.titulo + ", de " + filme.ano + ", dirigido por " + filme.diretor + " e estrelado por " + filme.elenco)*/

//4.
/*const informacoesPessoais = {
    nome: 'Lilian',
    idade: 37,
    email: 'lianicolau30@gmail.com',
    endereco: 'Rua das Petunias 1880W'
}
const manterAnonimato = {
    ...informacoesPessoais,
    nome: 'Anônimo',
}

console.log(manterAnonimato)*/

// Exercícios de função de array

//1.
/* a)
const nomeIdade = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 }
]

const adultos = nomeIdade.filter((pessoa, index, nomeIdade) => {
    if(pessoa.idade >= 20) {
        return true
    }
    return false
})
 console.log(adultos) */

 /* b) 
    const nomeIdade = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 }
]

const criancasAdolescentes = nomeIdade.filter((pessoa, index, nomeIdade) => {
    if(pessoa.idade < 20) {
        return true
    }
    return false
})
 console.log(criancasAdolescentes) */

 //2.
 /* a)
 const array = [1,2,3,4,5,6]
 
 function dobro(array) {
     console.log(array*2)
 }
 array.forEach(dobro) */

 /* b)
 const array = [1,2,3,4,5,6]

 function triplo(array) {
    console.log(array*3)
}
array.forEach(triplo) */

/* c)
const array = [1,2,3,4,5,6]

array.forEach((numero, index, array) => {    ***Incompleto***
    if ()


}) */

// 3. a)
/*const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]

    const temPermissao = pessoas.filter((pessoa, index, temPermissao) => {
        if(pessoa.idade > 14 && pessoa.idade < 60 && pessoa.altura > 1.5) {
            return true
        }
        return false
    })
    console.log(temPermissao) */

    //b)
    /*const pessoas = [
	{ nome: "Paula", idade: 12, altura: 1.8},
	{ nome: "João", idade: 20, altura: 1.3},
	{ nome: "Pedro", idade: 15, altura: 1.9},
	{ nome: "Luciano", idade: 22, altura: 1.8},
	{ nome: "Artur", idade: 10, altura: 1.2},
	{ nome: "Soter", idade: 70, altura: 1.9}
]
 const naoTemPermissao = pessoas.filter((pessoa, index, naoTemPermissao) => {
    if(pessoa.idade <= 14 || pessoa.idade > 60 || pessoa.altura < 1.5) {
    return true
    }
    return false
 })
 console.log(naoTemPermissao) */

 // 3.  ****INCOMPLETO****
/* const consultas = [
	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
]*/

// 4.
/*const contas = [
	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
]

contas.forEach((cliente, index, array) => {
    let soma = 0
    for (let compra of cliente.compras) {
        soma += compra
    }
    cliente.saldoTotal -= soma
   
})
console.log(contas) */










    

   
