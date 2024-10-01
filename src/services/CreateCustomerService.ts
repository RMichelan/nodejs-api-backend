import prismaClient from "../prisma";

interface CreateCustomerProps {
  name: string;
  email: string;
}

// Create an new customer
class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    // Validate fields from request
    if(!name || !email) {
      return {
        code: 200,
        success: false,
        error: 'Invalid data'
      };
    }

    // Create a new customer
    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true
      }
    });

    return {
      code: 200,
      success: true,
      rows: customer
    };
  }
}

export { CreateCustomerService };