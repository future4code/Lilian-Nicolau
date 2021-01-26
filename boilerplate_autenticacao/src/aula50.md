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
