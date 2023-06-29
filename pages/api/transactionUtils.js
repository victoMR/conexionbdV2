import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function performTransaction() {
  try {
    // Ejemplo de transacción con Prisma
    await prisma.$transaction([
      prisma.table1.updateMany({ data: { column: 'new value' } }),
      prisma.table2.deleteMany({ where: { column: 'value' } }),
    ]);

    return { message: 'Transacción completada exitosamente.' };
  } catch (error) {
    console.error(error);
    throw new Error('Error: No se pudo completar la transacción.');
  }
}
