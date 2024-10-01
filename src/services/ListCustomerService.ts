import prismaClient from "../prisma";

class ListCustomerService {
  async execute() {
    // List all customers
    const customers = await prismaClient.customer.findMany();

    return {
      code: 200,
      success: true,
      rows: customers
    };
  }
}

export { ListCustomerService };