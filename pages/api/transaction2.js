import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    let transaction;
    try {
      await prisma.$connect(); // Conectarse a la base de datos

      const result = await prisma.$transaction(async (prisma) => {
        try {
          await prisma.product.delete({
            where: {
              id_product: 21,
            },
            include: {
              included: true,
            },
          });

          console.log("Producto eliminado");
          return {}; // Devolver un objeto vacío como resultado
        } catch (error) {
          throw error; // Lanzar el error para desencadenar el rollback
        }
      });

      res.status(200).json({ message: 'Producto eliminado', result });
    } catch (error) {
      console.error('Error al ejecutar la transacción:', error);
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
