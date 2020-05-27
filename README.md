## Mongo-Graph-Express
### English
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
Follow up this tutorial:  https://github.com/matheuslanduci/mongo-graph-express/blob/master/TUTORIAL.md

### Português
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
	

				
**Como fazer as queries e as mutations?**
Siga este tutorial > https://github.com/matheuslanduci/mongo-graph-express/blob/master/TUTORIAL.md


 