import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await prisma.$connect(); // Connect to the database

      await prisma.product.create({
        data: {
          id_product: 25,
          nom_product: 'Licuado',
          desc_product: 'Bs',
          price_product: 80,
          id_stock1: 2, // Provide the store ID here
          id_pro1: 2, // Provide the provider ID here
          cat_id1: 2 // Provide the category ID here
        },
      });

      res.status(200).json({ message: 'Transacción completada con éxito.' });
    } catch (error) {
      console.error('Error al ejecutar la transacción:', error);
      res.status(500).json({ message: 'Error: No se pudo completar la transacción 1.' });
    } finally {
      await prisma.$disconnect(); // Disconnect from the database
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
