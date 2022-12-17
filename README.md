# Quem sou eu:

 [Luana Neumann](https://www.linkedin.com/in/luh-neumann/)

 Desenvolvedora Back-end pelo {Reprograma}

# Todas em tech - turma ON18
## Projeto Troca-Troca das Gurias

Quem é mãe sabe da rapidez com que os pequeninos crescem e suas roupas, calçados e fraldas deixam de servir em um piscar de olhos. 
De uma semana para a outra as peças não cabem mais e aquela roupa novinha fica sem utilidade. 
A ideia do projeto Troca-troca das gurias é conectar mães que têm itens de bebê que não usam mais às mães que
precisam desses itens. Cada usuária poderá cadastrar itens para doar e para receber doações. 
Dessa forma, além de permitir que pessoas de baixa renda tenham acesso a produtos essenciais para seus bebês,
gera-se o consumo mais consciente de produtos que tradicionalmente são pouco usados.

# Funcionalidades

* Criação de cadastro para login
* Login
* Criação de cadastro para troca
* Busca de trocas por cidades
* Busca de cadastros de doações por item 
* Busca de cadastro de pedidos de doações por item
* Atualização do cadastro de troca
* Remoção do cadastro de usuário

# Tecnologias e dependências

* javascript
* nodejs
* nodemon
* MONGO DB
* Mongoose
* EXPRESS
* JWT
* Bcrypt
* Git/Github
* Vercel
* Postman
* Cors
* Dotenv

## Acesso


[GitHub](https://github.com/luhneumann/Projeto-Final-Reprograma.git)


[Vercel](https://projeto-final-reprograma-luhneumann.vercel.app/)


## Documentação 

## Rotas referentes ao cadastro de troca
#

#### Retorna todos os itens

```http
  GET /trocatroca/lista
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|     Sem parâmetro  | ----- | Retorna lista de todos cadastros de troca |
 

#
#### Retorna os cadastros pelo Id

```http
  GET /trocatroca/busca/:id
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
|  id    | string | ID do usuário - Obrigatório |

#


#### Retorna cadastros por cidade

```http
  GET /trocatroca/busca/cidade
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| cidade       | `string` |  Cidade de residência do usuário - Obrigatório |

#

#### Retorna cadastros de doadores por itens disponíveis para doação

```http
  GET /trocatroca/busca/doador
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| para_doar | `string` | itens para doação - Obrigatório |

#

#### Retorna cadastros por itens solicitados

```http
  GET /trocatroca/busca/recebem
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| preciso_de | `string` | Itens que estão sendo solicitados - Obrigatório|

#

#### Atualiza cadastros encontrados via ID

```http
  PATCH /trocatroca/:id
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| ID | `string` | ID do item a ser atualizado - Obrigatório|

#


## Rotas referentes ao cadastro de usuário

#### Cria um novo cadastro de usuário

```http
  POST /trocatroca/create
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Sem parâmetro | ----- | Cadastra um novo usuário |

#

#### Autoriza o login do usuário

```http
  POST /trocatroca/login
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Sem parâmentro | ----- | Realiza login do usuário |

#

#### Remove o cadastro do usuário

```http
  POST /trocatroca/remove
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| Sem parâmentro | ----- | Realiza login do usuário |

#





## Arquitetura MVC
```

 📁TROCA-TROCA DAS GURIAS
   |
   |    |-  📁 src
   |    |
   |    |- 📁 controller
   |         |- 📑 authController.js
   |         |- 📑 trocaTrpcaController.js
   |         |- 📑 userController.js   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |    |- 📁 middleware
   |         |- 📑 auth.js  
   |    |- 📁 model
   |         |- 📑trocaTrocaSchema.js
   |         |- 📑userSchema.js            
   |    |- 📁 routes
   |         |- 📑trocaTrocaRoutes.js  
   |    |- 📑 app.js
        |- 📑 swagger.json
   |
   |- 📑 .env
   |- 📑 .gitignore
   |- 📑 package.json
   |- 📑 package-lock.json
   |- 📑 README.me
   |- 📑 server.js
   |- 📑 vercel.json
   
````

# Futuras IMPLEMENTAÇÕES

* Adicionar rotas de buscas mais específicas;
* Executar os testes via jest;
* Criar um front-end;
* Adicionar fotos dos produtos disponíveis;
* Adicionar link do whatsapp para que a comunicação dos usuários seja facilitada