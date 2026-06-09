CREATE TABLE livros (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    genero VARCHAR(50),
    autor VARCHAR(100),
    ano INT
);

CREATE TABLE autores (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    nacionalidade VARCHAR(50),
    idade INT,
    genero VARCHAR(50)
);