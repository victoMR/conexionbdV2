import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      await prisma.$connect(); // Connect to the database
      
      const result = await prisma.$transaction(async (transaction) => {
        try {
          const createdProduct = await prisma.product.create({
            data: {
              id_product: 25,
              nom_product: 'Michelada',
              desc_product: 'Tremendo michelon',
              price_product: 10,
              id_stock1: 2, // Provide the store ID here
              id_pro1: 2, // Provide the provider ID here
              cat_id1: 2, // Provide the category ID here
            },
            transaction,
            
          });
          res.status(200).json({ message: 'Transacción completada con éxito.', result });
          return createdProduct; // Return the created product as the result
        } catch (error) {
          throw error; // Throw the error to trigger the rollback
        }
      });

      
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
