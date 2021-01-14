### Exercício 1
a) A foreign key é o que vamos usar para relacionar uma tabela com outra e deve sempre buscar a primary key da outra tabela.

b) CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    filmes_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES Filmes(id)
);

INSERT INTO Rating (id, comment, rate, filmes_id)
Values 
(
"002",
"Bom",
8,
"030"
),
(
"003",
"Muito bom",
8.5,
"031"
),
(
"004",
"Excelente",
10,
"032"
),
(
"005",
"Muito bom",
9,
"033"
);

SELECT * FROM Rating;

c) Pelo erro que dá no código, deu uma falha de foreign key sendo a referência dele o ID de filmes.
 	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-lilian-nicolau`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `Filmes` (`id`))	0.046 sec

d) ALTER TABLE Filmes DROP COLUMN avaliacao;

e) O erro para a query DELETE FROM Filmes WHERE avaliacao > 9 foi o seguinte: Error Code: 1054. Unknown column 'avaliacao' in 'where clause', ou seja, o sistema não reconhece mais a coluna avaliacao que foi deletada no passo d). 

### Exercício 2
a) Essa tabela está pegando os dados das tabelas de filmes e atores para fazer uma outra tabela chamada MovieCast, na qual vamos incluir as informações de quais atores fizeram quais filmes.

b) CREATE TABLE MovieCast (
		filmes_id VARCHAR(255),
		actor_id VARCHAR(255),
    FOREIGN KEY (filmes_id) REFERENCES Filmes(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);
INSERT INTO MovieCast(filmes_id, actor_id)
VALUES
(
	"030",
    "031"
),
(
	"031",
    "035"
),
(
	"032",
    "034"
),
(
	"033",
    "032"
),
(
	"030",
    "033"
),
(
	"033",
    "031"
);

SELECT * FROM MovieCast;

c) Pelo erro que dá no código, deu uma falha de foreign key sendo a referência dele o ID de filmes (coloquei um id de Filmes inexistente).
	Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`dumont-lilian-nicolau`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`filmes_id`) REFERENCES `Filmes` (`id`))	

d) Query: DELETE FROM Actor WHERE id = "032"
Não entendi bem o erro, mas na tradução diz que não é possível deletar ou atualizar uma row mãe pois dá erro de foreign key.	
    Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`dumont-lilian-nicolau`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))

### Exercício 3
a) O ON é uma condição para a tabela ficar mais organizada.

b) Query:
SELECT titulo, Filmes.id, rate FROM
Filmes
JOIN Rating ON
Filmes.id = Rating.filmes_id;

### Exercício 4
Eu não consegui entender a questão do LEFT JOIN, RIGHT JOIN. Fiz as queries sem esses operadores.
a) Query:
SELECT titulo, Filmes.id, rate, comment FROM
Filmes
JOIN Rating ON
Filmes.id = Rating.filmes_id;

b) Query: (não consegui fazer retornar somente informações de id do filme, título do filme e id do ator)
SELECT * FROM
Filmes
JOIN MovieCast ON
Filmes.id = MovieCast.filmes_id
Join Actor ON
Actor.id = MovieCast.actor_id;

c) A query abaixo não voltou a média das avaliações, só voltou as avaliações mesmo.
SELECT AVG(rate), Filmes.id, Filmes.titulo FROM Filmes
JOIN Rating ON Filmes.id = Rating.filmes_id
GROUP BY (Filmes.id);

### Exercício 5
a) Precisamos de dois JOIN porque vamos juntar mais de duas tabelas. 

b,c) Query: (não consegui fazer sozinha)
SELECT Filmes.id as filme_id, Filmes.titulo, Actor.id as actor_id, Actor.name FROM Filmes 
LEFT JOIN MovieCast ON Filmes.id = MovieCast.filmes_id
JOIN Actor ON Actor.id = MovieCast.actor_id;

A query acoma retornou exatamente o que o exercício b e c pedem: o id e o título do filme, e o id e o nome do ator.

### Exercício 6
a) É uma tablela que precisa de uma Foreign Key já que vou pegar dados de outra tabela para relacionar com essa.

b) Query:
CREATE TABLE Oscar (
		id VARCHAR(255) NOT NULL,
		name VARCHAR(255) NOT NULL,
        filmes_id VARCHAR(255),
		FOREIGN KEY (filmes_id) REFERENCES Filmes(id)
);

ALTER TABLE Oscar ADD data_ganhou DATE NOT NULL;

c) Query:
INSERT INTO Oscar (id, name, filmes_id, data_ganhou)
VALUES 
(
"001",
"Melhor Filme",
"033",
"2015-02-15"
),
(
"002",
"Melhor Fotografia",
"032",
"2014-02-16"
),
(
"003",
"Melhor Direção",
"030",
"2013-02-21"
),
(
"004",
"Melhor Efeitos Visuais",
"031",
"2012-02-10"
);

SELECT * FROM Oscar;

d) Query:
SELECT titulo, name, data_ganhou  FROM
Filmes
JOIN Oscar ON
Filmes.id = Oscar.filmes_id;


