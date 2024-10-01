import { FastifyInstance, FastifyPluginAsync, FastifyRequest, FastifyReply } from "fastify";
// ** Imports Controllers
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomerController";
import { UpdateCustomerController } from "./controllers/UpdateCustomerController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginAsync) {

  // (GET) Just get route to test
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    return {
      code: 200,
      success: true,
      message: "Default router"
    }
  });

  // (POST) Create customer route
  fastify.post("/create", async (request: FastifyRequest, reply: FastifyReply) => {
    return new CreateCustomerController().handle(request, reply);
  });

  // (GET) List customers route
  fastify.get("/read", async (request: FastifyRequest, reply: FastifyReply) => {
    return new ListCustomerController().handle(request, reply);
  });

  // (UPDATE) Update customer route
  fastify.patch("/update", async (request: FastifyRequest, reply: FastifyReply) => {
    return new UpdateCustomerController().handle(request, reply);
  });

  // (DELETE) Delete customer route
  fastify.delete("/delete", async (request: FastifyRequest, reply: FastifyReply) => {
    return new DeleteCustomerController().handle(request, reply);
  });

}