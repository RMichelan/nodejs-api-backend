import { FastifyRequest, FastifyReply } from "fastify";
import { ListCustomerService } from "../services/ListCustomerService";

class ListCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const listCustomerService = new ListCustomerService();
    const customerts = await listCustomerService.execute();

    reply.send(customerts);
  }
}

export { ListCustomerController };