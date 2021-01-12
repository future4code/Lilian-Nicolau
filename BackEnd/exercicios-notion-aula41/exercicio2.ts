//a) tipar as entradas e saídas dessa função - as entradas dessa função são um array de números
function obterEstatisticas(numeros: number[]): number {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: any = {  //na resolução, a tipagem de const estats está estatistica, mas aqui dá errado
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//b) 
    type estatistica = {
        maior: number,
        menor: number,
        media: number
    }   
//numerosOrdenados é um array de numeros, soma é um número e estatísticas pode ter um type próprio, com 3 numeros, maior, menor e média. Daí se eu fizer um type estatistica, eu consigo jogar ele lá em cima no lugar de any.

//c) 
    type amostraDeDados = {
        numeros: number[],
        obterEstatisticas: (numeros: number[]) => estatistica
    }
//a criação de um type que possui um array de números e seus cálculos a partir da amostra

