import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let transaction;
    try {
      //await prisma.$connect(); 
      const result = await prisma.$transaction(async (prisma) => {
        try {
          const createdProduct = await prisma.product.create({
            data: {
              id_product: 21, // Este nombre de campo es incorrecto a propósito en veces el original es id_product
              nom_product: 'Michelada',
              desc_product: 'Tremendo michelon',
              price_product: 1, //eliminar debidoa que cuata un peso
              id_stock1: 2, // Proporcionar aquí el ID de la tienda
              id_pro1: 2, // Proporcionar aquí el ID del proveedor
              cat_id1: 2, // Proporcionar aquí el ID de la categoría
            },
          });
          console.log("Éxito Product"); // Imprimir mensaje de éxito en la consola del servidor
          return createdProduct; // Devolver el producto creado como resultado
        } catch (error) {
          res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
     
         // throw error; // Lanzar el error para desencadenar el rollback
        }
      });

      res.status(200).json({ message: 'Transacción completada con éxito.', result });
    } catch (error) {
      console.log("Error:", error); // Imprimir mensaje de error en la consola del servidor
      res.status(500).json({ message: 'Error: No se pudo completar la transacción.' });
      if (transaction) {
        console.log("Realizando ROLLBACK:");
        await prisma.$queryRaw('ROLLBACK');
        console.log("Rollback completado.");
      }
    } finally {
      await prisma.$disconnect(); // Desconectarse de la base de datos
    }
  } else {
    res.status(405).json({ message: 'Método no permitido.' });
  }
}
