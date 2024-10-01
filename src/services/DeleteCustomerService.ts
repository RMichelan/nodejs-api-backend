import prismaClient from "../prisma";

interface DeleteCustomerProps {
  id: string;
}

// Delete an customer
class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    // Check if id exists in params
    if (!id) {
      throw new Error('Id is required');
    }

    // Check if id is a valid UUID
    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id
      }
    });

    // If customer  is not found, throw an error
    if (!findCustomer) {
      throw new Error('Customer not found');
    }

    // Delete customer
    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id
      }
    });

    return {
      code: 200,
      success: true,
      message: 'Customer deleted'
    }
  }
}

export { DeleteCustomerService };