### Exercício 1

a) Sim, concordo que seja melhor do que usar números porque aumento a possibilidade de combinações.
b) Veja no idGenerator.ts

### Exercício 2

a) Na const userTableName estamos dizendo que o nome da tabela é "User". A const connection trabalha para vincular o nosso código ao banco de dados. A constante createUser é o código para a criação da tabela "User"; ela inclui usuários no banco de dados.
b) Query:
CREATE TABLE Users(
id VARCHAR (255) PRIMARY KEY,
email VARCHAR (255) NOT NULL,
password VARCHAR (255) NOT NULL
);
c) Código no insertUsers.ts

### Exercício 3

a) A expressão as string mostra que essa chave é tipada como string.
b) Código no authenticator.ts. Não deu certo o código seguindo as dicas do notion, fiz um código mais parecido com o da aula, mesmo assim não consegui pegar o token.

### Exercício 4

a) Endpoint criado no arquivo createUser.ts.
Eu não consegui pegar o token pelo teminal, se bem entendi, teria que passá-lo ao criar usuário pelo insomnia, certo? Eu tentei criar usuário somente com e-mail e senha, mas deu o seguinte erro: "message": "secretOrPrivateKey must have a value"
Não consegui continuar os exercícios.
Depois consegui continuar vendo as dicas do Notion.
b) e c) feitas

### Exercício 5
a) Código no searchEmail.ts

### Exercício 6
a) Para fazer o endpoint funcionar seguido mais ou menos as dicas do Notion, eu tive que informar o id no body do post, daí o insomia me retornou o token. Código no getUser.ts

### Exercício 7
Código no autheticator.ts

### Exercício 8
Eu fiquei confusa no exercício 8 porque primeiro ele pede para pegar o usuário através do token, as no código pega pelo id. Porém, é muito provável ser um problema de entendimento meu do que do exercício...
Tentei, mas não consegui fazer funcionar. Teste em userProfile.ts e searchProfile.ts
tokens:
Magali:
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQ5MjNmMzhkLTI4OTgtNDNlMy04MGZmLWFmNzIxODdkMTUzZCIsImlhdCI6MTYxMTc3NzUyNCwiZXhwIjoxNjExNzc3NTg0fQ.Vx4goTEB0YxImKhmamJSpD7vKkQTTTn_cimCiUIUQ5w"
}
