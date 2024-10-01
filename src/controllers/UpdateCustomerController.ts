import { FastifyReply, FastifyRequest } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";

interface UpdateCustomerProps {
  id: string,
  name: string,
  email: string,
}

class UpdateCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as UpdateCustomerProps;
    const { name, email } = request.body as UpdateCustomerProps;

    const customerService = new UpdateCustomerService();
    const customer = await customerService.execute({ id, name, email });

    reply.send(customer);
  }
}

export { UpdateCustomerController };