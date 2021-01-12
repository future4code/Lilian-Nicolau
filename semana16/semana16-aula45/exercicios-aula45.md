### Exercício 1
a) Query: ALTER TABLE Actor DROP COLUMN salary;
Essa query remove a coluna salary.
b) Query: ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
Essa query muda o nome da coluna gender para sex e é uma string de no máximo 6 caracteres.
c) Query: ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
Essa query volta o nome da coluna para gender e agora ela aceita 255 caracteres.
d) Query: ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

## Exercício 2
a) Query: 
    UPDATE Actor
    SET name = "Moacyr Franco",  birth_date = "1936-10-05"
    WHERE id = "003";
b) Query 1:
    UPDATE Actor
    SET name = "JULIANA PÃES"
    WHERE name = "Juliana Paes";

    Query 2:
    UPDATE Actor
    SET name = "Juliana Paes"
    WHERE name = "JULIANA PÃES";
c) Query: 
    UPDATE Actor
    SET name = "Wagner Moura",  salary = 200000, birth_date = "1976-06-27", gender = "male"
    WHERE id = "005";
d) Query: (eu não tenho a Juliana Paes na minha tabela)
    UPDATE Actor
    SET gender = "female"
    WHERE name = "Juliana Paes";
    	Error Code: 1175. You are using safe update mode and you tried to update a table without a WHERE that uses a KEY column. To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.	0.031 sec
    Assim, não entendi se esse erro tem a ver ou não com a primary key, porque a minha condição está em um nome, não em uma id. Quando fiz a query abaixo, o sistema não deu erro; porém, não tenho nenhuma id = "40" na minha tabela. 
        UPDATE Actor
        SET gender = "female"
        WHERE id = "40";

### Exercício 3
a) Query: DELETE FROM Actor WHERE name = "Fernanda Montenegro";
b) Query: DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

### Exercício 4
a) Query: SELECT MAX(salary) FROM Actor; ***Não pode haver espaço entre o MAX e o nome da coluna.
b) Query: SELECT MIN(salary) FROM Actor WHERE gender = "female";
c) Query: SELECT COUNT(name) FROM Actor WHERE gender = "female";
d) Query: SELECT SUM(salary) FROM Actor;

### Exercício 5
a) A query abaixo retornou 5 atores do gênero masculino e 5 atrizes do gênero feminino.
    SELECT COUNT(*), gender
    FROM Actor
    GROUP BY gender
b) Query: SELECT id, name FROM Actor ORDER BY name DESC;
c) Query: SELECT * FROM Actor ORDER BY salary ASC;
d) Query: SELECT * FROM Actor ORDER BY salary DESC LIMIT 3;
e) Query:SELECT AVG(salary), gender FROM Actor GROUP BY gender; ** Não consegui pensar sozinha nessa, não coloquei o ,gender logo após o AVG(salary).

### Exercício 6 - Misturei inglês e português na tabela para ficar iual ao exercício.
a) Query: ALTER TABLE Filmes ADD playing_limit_date DATE NOT NULL;
b) Query: ALTER TABLE Filmes CHANGE avaliacao avaliacao FLOAT NOT NULL;
c) Não consegui fazer, mesmo olhando a sugestão, fiquei em dúvida. A dúvida é, na verdade, quando eu insiro uma coluna à tabela, como fazer para inserir a informação? Posso simplesmente voltar na lista de filmes e incluir essa informação lá?
d) Query: DELETE from Filmes WHERE id = "23";
    Resultado do DELETE: no sistema ele acusa que uma coluna foi afetada.
Query do UPDATE: UPDATE Filmes SET sinopse = "Filme massa." WHERE id = "023";
    Resultado do UPDATE: Curiosamente, o resultado é esse: UPDATE Filmes SET sinopse = "Filme massa." WHERE id = "023"	0 row(s) affected  Rows matched: 0  Changed: 0  Warnings: 0	0.031 sec
    Eu pensava que daria algum erro porque eu deletei o id 23, mas não deu erro.

### Exercício 7
a) Query: SELECT titulo FROM Filmes WHERE avaliacao > 7;
b) Query: SELECT AVG(avaliacao) FROM Filmes;
c) Query: SELECT COUNT(titulo) FROM Filmes;
d) Query: SELECT COUNT(*) FROM Filmes WHERE data_de_lancamento > CURDATE();
e) Query: SELECT MAX(avaliacao) FROM Filmes;
f) Query: SELECT MIN(avaliacao) FROM Filmes;

### Exercício 8
a) Query: SELECT * FROM Filmes ORDER BY titulo ASC;
b) Query: SELECT * FROM Filmes ORDER BY titulo DESC LIMIT 5;
c) Query: SELECT * FROM Filmes WHERE data_de_lancamento < CURDATE() ORDER BY data_de_lancamento DESC 
LIMIT 3; *Não consegui pensar nessa resolução, mas vendo, entendo. 
d) Query: SELECT * FROM Filmes ORDER BY avaliacao DESC LIMIT 3; *Não consegui pensar nessa resolução.



