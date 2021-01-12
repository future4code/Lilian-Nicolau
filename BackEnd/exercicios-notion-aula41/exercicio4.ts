
type pokemon = {
name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

//a) Eu tenho que dar o comando tsc no terminal para criar o arquivo index.js. Nesse caso, dei o comando tsc exercicio4, daí foi criado o arquivo .js

//b
//para transpilar de uma pasta chamada src, seria necessário estar nesta pasta, ou apontar seu caminho no comando.
//Seria então, estando dentro da pasta src, tsc ex4.ts novamente, ou, estando fora da pasta, tsc ./src/ex4.ts

//c
//Para transpilar múltiplos arquivos de forma simultânea precisamos do arquivo de configuração do typescript, o tsconfig.json
//Ao utilizá-lo, podemos transpilar todos os arquivos de uma dada pasta apenas com o comando tsc.