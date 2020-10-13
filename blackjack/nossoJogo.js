console.log("Seja bem-vinda(o) ao jogo de blackjack!")

let jogo = confirm("Quer iniciar uma nova rodada?")

if (jogo) {
   //console.log("Vamos lá!")
   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   let pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   let pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontuacaoUsuario}`)
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontuacaoComputador}`)

   if (pontuacaoUsuario > pontuacaoComputador) {
      console.log("Você ganhou!")
   } else if (pontuacaoComputador > pontuacaoUsuario) {
      console.log("O computador ganhou.")
   } else {
      console.log("Empate!")
   }
} else {
   console.log("O jogo acabou.")
}



/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */