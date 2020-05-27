import express from "express";
import graphqlHTTP from "express-graphql";
import mongoose from "mongoose";

import cors from "cors";
import databaseConfig from "./config/database";

import gqlSchema from "./app/controllers/schema";

class App {
  constructor() {
    this.express = express();

    this.database();
    this.middlewares();
  }

  database() {
    mongoose.connect(databaseConfig.uri, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });
  }

  middlewares() {
    this.express.use(cors());
    this.express.use(
      "/graphiql",
      graphqlHTTP({
        schema: gqlSchema,
        graphiql: true
      })
    );
  }
}

export default new App().express;
