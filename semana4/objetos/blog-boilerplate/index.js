let blog = () => {
  let armazenaTitulo = document.getElementById("titulo-post");
  let armazenaAutor = document.getElementById("autor-post");
  let armazenaConteudo = document.getElementById("conteudo-post");

  const post = {
    titulo: armazenaTitulo.value,
    autor: armazenaAutor.value,
    conteudo: armazenaConteudo.value,
  };

  console.log(post);
};

const apertouBotao = () => {
  blog();
};

const apertouEnter = (event) => {
  if (event.key === "Enter") {
    blog();
  }
};
