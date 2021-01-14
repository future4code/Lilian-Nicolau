### Exercício 1

a) Nessa query temos os seguites comandos:
*VARCHAR (255) indica que recebemos aí uma string de no máximo 255 caracteres.
*DATE indica uma data no formato 2021-01-11.
b) Quando dou o comando SHOW DATABASES, aparece o nome da minha database, dumont-lilian-nicolau e também uma outra na linha de baixo chamada information_schema.
Quando dou o comando SHOW TABLES aparece a tabela que está debaixo do meu database; no caso, apareceu a palavra Actor.
c) Quando dou o comando DESCRIBE Actor, aparece uma tabela com 6 campos: field (as informações que quero na minha tabela), type (o tipo da informação - string, int, etc), null (avisa se aquele campo pode ter informação null - responde com NO. Porém, troquei uma informação para null e continuou dando NO), key (avisa se a informação é primary), default (acusou null, não entendi muito bem o por quê) e extra (não voltou nenhum resultado).
Query:
USE `dumont-lilian-nicolau`;

    CREATE TABLE Actor (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR (255) NOT NULL,
        salary FLOAT NOT NULL,
        birth_date DATE NOT NULL,
    	gender VARCHAR(6) NOT NULL

);

### Exercício 2

a) Query:
(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
);
b) Query:
(
"002",
"Fernanda Montenegro",
2200000,
"1929-10-16",
"female"
);
Deu erro 1136: A contagem de colunas não corresponde à contagem de valores na linha 1. Na listagem do INSERT INTO faltou a coluna gender. Depois que inseri o gender na lista, deu o erro de entrada duplicada do número 002 para key primária. O primary key deve ser um número único.
c) O erro é: A contagem de colunas não corresponde à contagem de valores na linha 1. Na listagem do INSERT INTO faltaram as colunas birth_date e gender. Para consertar, incluo essas informações na listagem do INSERT INTO. Query correta:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
"003",
"Fernanda Montenegro",
300000,
"1929-10-19",
"female"
);
d) Deu erro 1364: o campo "name" não tem valor por default. Para corrigir isso, tenho que incluir 'name' no INSERT INTO e dar um valor para ele.
Query correta:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
"004",
"Antônio Fagundes",
400000,
"1949-04-18",
"male"
);
e) Deu erro 1292: valor de data incorreto: indica aspas '1950' para a coluna birth_date na linha 1. Para consetar isso, coloco a data entre aspas.
Query correta:
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
"005",
"Juliana Paes",
719333.33,
"1979-03-26",
"female"
);
f) Inserir mais um ator e atriz.
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
"006",
"Tatá Werneck",
5000000,
"1983-08-11",
"female"
);
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES
(
"007",
"Pierce Brosnan",
50000000,
"1953-05-16",
"male"
);

### Exercício 3

a) A query que retorna todas as informações das atrizes é: SELECT * FROM Actor WHERE gender = "female";
b) A query que retorna o salário do ator Tony Ramos é: SELECT salary FROM Actor WHERE name = "Tony Ramos";
c) Escreva uma query que retorne todas as informações que tenham o gender com o valor "invalid". Não consegui escrever uma query cujo que o valor saísse "invalid".
d) Query que retorna o id, nome e salário de todos que tenham o salário com o valor máximo de R$500.000: SELECT id, name, salary from Actor WHERE salary <= 500000;
e) Erro 1054. Coluna "nome" desconhecida na lista. Teria que ser "name" em inglês. 
Query: SELECT id, name from Actor WHERE id = "002";

## Exercício 4

a) A Query abaixo quer todas as informações dos atores ou atrizes cujos nomes começam com a letra A ou J e cujos salários são maiores que trezentos mil. 
SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000
b) Query com os atores que não comecem com a letra "A" e tenham o salário maior do que R$350.000,00:
SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 300500;
c) Query com os atores que possuam "G" ou "g" em qualquer parte do nome:
SELECT * FROM Actor WHERE name LIKE "%G%" OR name LIKE "%g%";
d) Query com os atores que tenham a letra "a" ou "A" ou "g" ou "G" no nome e o salário entre R$350.000,00 e R$900.000,00: SELECT * FROM Actor WHERE (name LIKE "%G%" OR name LIKE "%A%" OR name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

### Exercício 5
a) Tabela e Query:
CREATE TABLE Filmes (
    id VARCHAR(255) PRIMARY KEY,
    titulo VARCHAR (255) NOT NULL,
    sinopse VARCHAR (255) NOT NULL,
    data_de_lancamento DATE NOT NULL,
	avaliacao INT NOT NULL
);
INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao) VALUES 
(
 "001",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
 "2006-01-06",
 7
);
b, c, d, e) Query:
INSERT INTO Filmes (id, titulo, sinopse, data_de_lancamento, avaliacao) VALUES 
(
 "020",
 "Se Eu Fosse Você",
 "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
 Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
 "2006-01-06",
 7
),
(
"021",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, 
empregada e amiga de Dona Picucha, anuncia que vai se casar e 
não poderá mais morar com ela",
"2012-12-27",
10
),
(
"022",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, 
que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por
 acarretar sua morte precoce.",
"2017-11-02",
8
),
(
"023",
"O homem do Futuro",
"Zero é um cientista ridicularizado cuja última invenção o levou ao passado, 
lhe dando a chance de refazer sua vida. ",
"2011-08-27",
10
);

### Exercício 6 - Ver por que tive que ficar mudando os ids para dar certo (não dar erro)
a) Query: SELECT id, titulo, avaliacao FROM Filmes WHERE id = "021";
b) SELECT titulo FROM Filmes WHERE titulo = "O homem do futuro";
c) SELECT id, titulo, sinopse FROM Filmes WHERE avaliacao >= 7; 

### Exercício 7
a) Query: SELECT titulo FROM Filmes WHERE titulo LIKE "%vida%";
Essa query não devolveu nada.
b) Query: SELECT titulo FROM Filmes WHERE titulo LIKE "%maridos%";
Voltou o título "Dona Flor e Seus Dois Maridos".
c) Não consegui resolver a query sozinha, tive que ver as dicas. Query:
SELECT * FROM Filmes WHERE data_de_lancamento < "2021-01-11";
d) Query: SELECT * FROM Filmes WHERE (titulo LIKE "%Fosse%" OR sinopse LIKE "%corpos%") AND 
data_de_lancamento < "2021-01-11" AND avaliacao > 7;
Retornou nulo, mas não era para retornar nulo.