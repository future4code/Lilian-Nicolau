//Exercício 1
//a) 
const minhaString: string = "casa"
//const minhaString2: string = 2 //O tipo number não pode ser atribuído ao tipo string. Erro.
//b)
const meuNumero: number | string = "dois" //ou 2. Posso declarar como any também
const meuNumero2: any = 2
//c) 
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Lilian",
    idade: 37,
    corFavorita: "verde"
}
//d
type pessoa = {nome: string, idade: number, corFavorita: string}
const person: pessoa [] = [
{
    nome: "Lilian",
    idade: 37,
    corFavorita: "verde"
},
{
    nome: "Maria",
    idade: 45,
    corFavorita: "azul"
},
{
    nome: "José",
    idade: 50,
    corFavorita: "amarelo"
}
]
//e) Não soube fazer essa. Na solução dos exercícios, temos a seguinte resolução:
enum COR_ARCO_IRIS {
    AMARELO = "amarelo",
    ANIL = "anil",
    AZUL = "azul",
    LARANJA = "laranja",
    VERDE = "verde",
    VERMELHO = "vermelho",
    VIOLETA = "violeta"
}
type Pessoa2 = {nome: string, idade: number, corFavorita: COR_ARCO_IRIS}; //essa COR_ARCO_IRIS está substituindo string da letra d) acima
const jim2: Pessoa2 = {nome: "Jim Halpert", idade: 42, corFavorita: COR_ARCO_IRIS.AZUL}
const pam2: Pessoa2 = {nome: "Pam Beesly", idade: 41, corFavorita: COR_ARCO_IRIS.VIOLETA}
const dwight2: Pessoa2 = {nome: "Dwight Schrute", idade: 50, corFavorita: COR_ARCO_IRIS.AMARELO}
//aqui podemos restringir os dados utilizando os enums