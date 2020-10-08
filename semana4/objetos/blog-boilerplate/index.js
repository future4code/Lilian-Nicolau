let blog = () => {
  let armazenaTitulo = document.getElementById("titulo-post"); //variável de pega título do post  na página html
  let armazenaAutor = document.getElementById("autor-post");// variável que pega nome do autor digitado na página
  let armazenaConteudo = document.getElementById("conteudo-post"); // variável que pega o conteúdo digitado na página

  let post = { // criando um objeto
    titulo: armazenaTitulo.value, //chave que pega o valor da varável armazenaTitulo
    autor: armazenaAutor.value, //chave que pega o valor da variável armazenaAutor 
    conteudo: armazenaConteudo.value, //chave que pega o valor da varável armazenaConteudo
  };

  let localImpressao = document.getElementById("container-de-posts") //local para imprimir os posts
  localImpressao.innerHTML += `<p>${post.titulo}, ${post.autor}, ${post.conteudo},</p>`//vai imprimir o conteódo do objeto

  console.log(post);
};

const apertouBotao = () => { //função que deixa o valor ser inserido clicando no botão
  blog();
};

const apertouEnter = (event) => { //função que deixa o valor ser inserido apertando enter
  if (event.key === "Enter") {
    blog();
  }
};

/*let apagaForm = () => {
	document.getElementById("titulo-post").value = "";
	document.getElementById("autor.post").value = "";
	document.getElementById("conteudo.post").value = "";
}

console.log(apagaForm)*/


