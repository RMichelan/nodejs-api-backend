// ** Imports Fastify
import fastify from "fastify";
import cors from "@fastify/cors";

// ** Import Routes
import { routes } from "./routes";

const app = fastify({ logger: true });

app.setErrorHandler((error, request, reply) => {
  reply.code(400).send({ message: error.message });
});

// Start the server
const start = async () => {

  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });;
  } catch (err) {
    process.exit(1);
  }

}

start();