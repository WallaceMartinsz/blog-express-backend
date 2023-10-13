# CRUD para um blog.

Projeto criado relacionado a disciplina de Backend Frameworks usando:
- Express
- MongoDB

## Clone o repositório

```bash
  git clone url
```

## Instalando dependências

Dentro da pasta clonada abra com o cmd e digite:

```bash
  npm install
```

## Rodando o projeto

Para rodar utilizer no cmd o seguinte comando:
```bash
  npm run dev
```

## Rotas da API

### Retorna todos os posts

```http
  GET /api/items
```

###  Retorna um post

```http
  GET /api/post/${id}
```

### Adicionar um post

```http
  POST /api/post
```
O body deve ser o seguinte: 
```
{
    "autor": "",
    "assunto": "",
    "titulo": ""
    "conteudo": "",
    "img": ""
}
```

### Atualizar um post

```http
  PUT /api/post/${id}
```
O body deve ser de acordo com o que você deseja alterar ou todos os campos: 
```
{
    "autor": "",
    "assunto": "",
    "titulo": ""
    "conteudo": "",
    "img": ""
}
```

#### Deletar um post

```http
  DELETE /api/post/${id}
```
