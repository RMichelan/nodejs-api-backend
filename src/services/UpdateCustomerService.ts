import prismaClient from "../prisma";

interface UpdateCustomerProps {
  id: string;
  name: string;
  email: string;
}

class UpdateCustomerService {
  async execute({ id, name, email }: UpdateCustomerProps) {
    if(!name && !email) {
      throw new Error("Name or E-mail cannot be empty");
    }

    // Update customer
    const customers = await prismaClient.customer.update({
      where: {
        id: id,
      },
      data: {
        ...(name && { name }),
        ...(email && { email }),
      }
    });

    return {
      code: 200,
      success: true,
      rows: customers
    };
  }
}

export { UpdateCustomerService };