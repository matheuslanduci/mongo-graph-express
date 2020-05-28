# Mongo-Graph-Express
## English
Backend application made in NodeJS.
Using Express, GraphQL, MongoDB. Using Sucrase as development dependency to keep a good syntax.

Purpose: Learn GraphQL with MongoDB and Express.

Execute MongoDB and create a database named "graphqlemployees" then create collections called "employees" and "sectors". (I strongly recommend that you do by [MongoDB Compass](https://www.mongodb.com/products/compass)).

After your Mongo set up you can run the project:
	
	  $ git clone https://github.com/matheuslanduci/mongo-graph-express.git mongo-graph-express 
	  $ cd mongo-graph-express 
	  $ yarn // or npm install - install dependencies
	  $ yarn dev // or npm run dev - run server

Then, if you want to create a production build:

	  $ yarn build // or npm build
	  $ node dist/index.js

**How to query with GraphQL?**

Follow up the tutorial at the end of this README.

## Português
Aplicativo Backend feito em NodeJS. 
Utilizando Express, GraphQL, MongoDB. Utilizando Sucrase como dependência de desenvolvimento para deixar uma boa sintaxe.

Intuito: Aprender GraphQL com MongoDB e Express.

Execute o seu MongoDB e crie um banco chamado "graphqlemployees" com as coleções "employees" e "sectors" (Recomendo você fazer isso pelo [MongoDB Compass](https://www.mongodb.com/products/compass)).
Após seu Mongo estar configurado você pode iniciar o projeto:

	  $ git clone https://github.com/matheuslanduci/mongo-graph-express.git mongo-graph-express
	  $ cd mongo-graph-express
	  $ yarn // ou npm install - para instalar dependências
	  $ yarn dev // ou npm run dev - para rodar o desenvolvimento

Após criar o ambiente de desenvolvimento, se você quiser simular para ambiente de desenvolvimento:
	
	  $ yarn build
	  $ node dist/index.js
	

				
**Como fazer as queries no GraphQL?**

Siga o tutorial no fim desse README.

# Tutorial
## English
First, install [Insomnia Client](https://insomnia.rest/download/core/?).

Then, open it. 

![Imsomnia opened.](https://i.imgur.com/B3oRVP4.png)

Now create a new request named "Add employee" (every request will be method POST and Body GraphQL Query).

![Creating a new request](https://i.imgur.com/DOkz1kI.png)

URL: https://127.0.0.1:3332/graphiql
![Putting URL](https://i.imgur.com/bI6VT8H.png)

Now add code to body.

	mutation ($corporateID: Int!, $name: String!, $birthDate: Date!, $photo: String!, $occupation: String!, $salary: Float!, $sector: String!) {
	  addEmployee(corporateID: $corporateID, name: $name, birthDate: $birthDate, photo: $photo, occupation: $occupation, salary: $salary, sector: $sector) {
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}
	
Go to variables section and paste code below:
		
	{
		"corporateID": 1,
		"name": "Foo Bar",
		"birthDate": "1990-01-01",
		"photo": "https://i.picsum.photos/id/847/600/400.jpg",
		"occupation": "CEO",
		"salary": 9999,
		"sector": "Officers"
	}
	
Send the request. That's should be the response:

![Response of the request](https://i.imgur.com/RafGqcr.png)

Now create a request named "List employees".

![Creating a new request](https://i.imgur.com/1k229PH.png)

The MAIN of GraphQL. You can select the fields that you want to receive at the response of request.
For example, I want to list only **names** and **corporate IDs**.

![Body of request](https://i.imgur.com/ySbfUC2.png)

Send the request. That's should be the response:

![Response of request](https://i.imgur.com/5O4Gve8.png)

Now we are going to create a request named "Add sector".

![Creating a request](https://i.imgur.com/6h2eNjc.png)

Put the code below on body:

	mutation ($name: String!, $description: String!) {
	  addSector(name: $name, description: $description) {
	    name
	    description
	  }
	}

At variables section:

	{
	  "name": "Officers",
	  "description": "Officers of the company."
	}
	
Send the request. That's should be the response: 

![Response of request](https://i.imgur.com/8JWI25P.png)

Now let's list sectors and their employees:

![Creating a request](https://i.imgur.com/EWm8DcI.png)

Add body to request: 

	{
	  sectors {
	    name,
	    description,    
	    employees {
	      corporateID,
	      name,
	      occupation
	    }
	  }
	}

Send the request. That's should be the request:

![Request of Response](https://i.imgur.com/Ubq8cgg.png)
	
Rest of queries: 

**Update**

Employee

	mutation ($corporateID: Int!, $name: String, $birthDate: Date, $photo: String, $occupation: String, $salary: Float, $sector: String) {
	  updateEmployee(corporateID: $corporateID, name: $name, birthDate: $birthDate, photo: $photo, occupation: $occupation, salary: $salary, sector: $sector) {    
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}

**Sector**

	mutation ($id: ID!, $name: String, $description: String) {
	  updateSector(id: $id, name: $name, description: $description) {
	    name
	    description
	  }
	}



Note: You can update only the fields that you want. 

**Delete**

Employee

	mutation ($corporateID: Int!) {
	  removeEmployee(corporateID: $corporateID) {
	    name
	  }
	}



Sector

	mutation ($id: ID!) {
	  removeSector(id: $id) {
	    name
	  }
	}
	
Note: You need to inform the ID.

**Get by ID**

Employee

	query ($corporateID: Int!) {
	  employee(corporateID: $corporateID) {
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}

Sector

	query ($id: ID!) {
	  sector(id: $id) {
	    name
	    description
	  }
	}

Note: You need to inform the ID.


## Português

Primeiro, instale [Insomnia Client](https://insomnia.rest/download/core/?).

Depois, abra. 

![Imsomnia opened.](https://i.imgur.com/B3oRVP4.png)

Agora crie uma nova requisição chamada "Add employee" (toda requisição será no método POST e com o Body GraphQL Query).

![Creating a new request](https://i.imgur.com/DOkz1kI.png)

URL: https://127.0.0.1:3332/graphiql
![Putting URL](https://i.imgur.com/bI6VT8H.png)

Agora adicione este código ao corpo:

	mutation ($corporateID: Int!, $name: String!, $birthDate: Date!, $photo: String!, $occupation: String!, $salary: Float!, $sector: String!) {
	  addEmployee(corporateID: $corporateID, name: $name, birthDate: $birthDate, photo: $photo, occupation: $occupation, salary: $salary, sector: $sector) {
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}
	
Vá para a seção de variáveis.
		
	{
		"corporateID": 1,
		"name": "Foo Bar",
		"birthDate": "1990-01-01",
		"photo": "https://i.picsum.photos/id/847/600/400.jpg",
		"occupation": "CEO",
		"salary": 9999,
		"sector": "Officers"
	}
	
Envie a requisição. Essa deve ser a resposta:

![Response of the request](https://i.imgur.com/RafGqcr.png)

Agora crie uma requisição chamada "List employees".

![Creating a new request](https://i.imgur.com/1k229PH.png)

O principal do GraphQL. Você pode selecionar os campos que você quer receber na resposta da requisição. 
Por exemplo, eu quero listar apenas os **nomes** e os **IDs de corporação**

![Body of request](https://i.imgur.com/ySbfUC2.png)

Envie a requisição. Essa deve ser a resposta:

![Response of request](https://i.imgur.com/5O4Gve8.png)

Agora nós vamos criar uma requisição chamada "Add sector".

![Creating a request](https://i.imgur.com/6h2eNjc.png)

Coloque o código abaixo no corpo da requisição:

	mutation ($name: String!, $description: String!) {
	  addSector(name: $name, description: $description) {
	    name
	    description
	  }
	}

Na seção de variáveis:

	{
	  "name": "Officers",
	  "description": "Officers of the company."
	}
	
Envie a requisição. Essa deve ser a resposta:

![Response of request](https://i.imgur.com/8JWI25P.png)

Agora vamos listar os setores e seus empregados.

![Creating a request](https://i.imgur.com/EWm8DcI.png)

Adicione esse código ao corpo da requisição:

	{
	  sectors {
	    name,
	    description,    
	    employees {
	      corporateID,
	      name,
	      occupation
	    }
	  }
	}

Envie a requisição. Essa deve ser a resposta:

![Request of Response](https://i.imgur.com/Ubq8cgg.png)
	
Resto das queries.

**Editar**

Empregado

	mutation ($corporateID: Int!, $name: String, $birthDate: Date, $photo: String, $occupation: String, $salary: Float, $sector: String) {
	  updateEmployee(corporateID: $corporateID, name: $name, birthDate: $birthDate, photo: $photo, occupation: $occupation, salary: $salary, sector: $sector) {    
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}

Setor

	mutation ($id: ID!, $name: String, $description: String) {
	  updateSector(id: $id, name: $name, description: $description) {
	    name
	    description
	  }
	}



Nota: Você pode atualizar apenas os campos que desejar.

**Excluir**

Empregado

	mutation ($corporateID: Int!) {
	  removeEmployee(corporateID: $corporateID) {
	    name
	  }
	}



Setor

	mutation ($id: ID!) {
	  removeSector(id: $id) {
	    name
	  }
	}
	
Nota: Você precisa informar o ID.

**Pesquisar pelo ID**

Empregado

	query ($corporateID: Int!) {
	  employee(corporateID: $corporateID) {
	    corporateID
	    name
	    birthDate
	    photo
	    occupation
	    salary
	    sector
	  }
	}

Setor

	query ($id: ID!) {
	  sector(id: $id) {
	    name
	    description
	  }
	}

Nota: Você precisa informar o ID.

 