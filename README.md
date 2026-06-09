# Biblioteca API

## Objetivo

Esta API foi desenvolvida com o objetivo de gerenciar um sistema de biblioteca, permitindo o cadastro, listagem, busca, atualização e remoção de livros e autores.

## Integrantes

* Efraim Nascimento
* Grazielle Miranda
* Luiza Santana
* Julia Abrwu
* Nicolle Borges

## Entidades do Sistema

* Livros
* Autores

## Endpoints

### Livros

* GET /livros → Listar todos os livros
* GET /livros/:id → Buscar livro por ID
* POST /livros → Cadastrar novo livro
* PUT /livros/:id → Atualizar livro
* DELETE /livros/:id → Remover livro

### Autores

* GET /autores → Listar autores
* POST /autores → Cadastrar autor
* DELETE /autores/:id → Remover autor

## Tecnologias Utilizadas

* Node.js
* Express
* JavaScript

## Estrutura do Projeto

projeto-api/
├── src/
│ ├── routes/
│ ├── controllers/
│ ├── database/
│
├── server.js
├── package.json
├── .env
├── database.sql

## Testes da API

Os testes foram realizados utilizando o Postman, contemplando os métodos:

* GET
* POST
* PUT
* DELETE

As evidências dos testes estão disponíveis na pasta "evidencias".

## Banco de Dados

O projeto contém um arquivo `database.sql` com a estrutura das tabelas:

* livros
* autores
  
  ## Repositório
https://github.com/graziellemiranda-coder/biblioteca-api
