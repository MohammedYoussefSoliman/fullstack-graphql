import express from 'express';
import morgan from 'morgan';
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core';
import rateLimit from 'express-rate-limit';
import { ApolloServer } from 'apollo-server-express';
import { configEnvs } from '@utils';
import { errorHandlerMiddleware } from '@middleware';
import { connectDB } from '@configs';
import { typeDefs } from '@schema';
import { clientResolvers } from '@resolvers';
import http from 'http';

configEnvs();
connectDB();

async function startApolloServer() {
  const app = express();
  const httpServer = http.createServer(app);
  const server = new ApolloServer({
    typeDefs,
    resolvers: clientResolvers,
    //tell Express to attach GraphQL functionality to the server
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }), // Install a landing page plugin based on NODE_ENV
      process.env.NODE_ENV === 'production'
        ? ApolloServerPluginLandingPageProductionDefault({
            graphRef: 'my-graph-id@my-graph-variant',
            footer: false,
          })
        : ApolloServerPluginLandingPageLocalDefault({ footer: false }),
    ],
  });

  await server.start(); //start the GraphQL server.

  app.use(express.json());
  app.use(
    rateLimit({
      windowMs: 60 * 1000,
      max: 20,
      standardHeaders: true,
      message: 'Too many requests',
    }),
  );

  // http logger middleware
  app.use(morgan('common'));
  app.use(errorHandlerMiddleware);

  app.get('/', (req, res) => {
    res.json({
      message: 'hello world',
    });
  });
  server.applyMiddleware({ app });

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: process.env.PORT }, resolve),
  );
}

startApolloServer();
