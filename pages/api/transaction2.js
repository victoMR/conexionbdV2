import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await prisma.$connect(); // Connect to the database

      await prisma.product.delete({
        where: {
          id_product: 25,
        },
        include: {
          included: true,
        },
      });

      res.status(200).json({ message: 'Producto eliminado' });
    } catch (error) {
      console.error('Error al ejecutar la transacción:', error);
      res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
    } finally {
      await prisma.$disconnect(); // Disconnect from the database
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
