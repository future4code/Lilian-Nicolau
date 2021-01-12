//a) Tem que criar um type primeiro tipando as propriedades do objeto. Depois coloca ele na const com []
const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

type post = {
    autor: string,
    texto: string
}

//b)
function buscarPostsPorAutor(posts: post[], autorInformado: string): post[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }
 //os tipos dos parâmetros são, respectivamente, array de Post, e string. O retorno é um array de Post