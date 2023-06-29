import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Lógica para llamar al procedimiento almacenado
      const result = await prisma.$queryRaw('CALL nombre_procedimiento();');

      res.status(200).json({result});
    } 
    catch (error) {
      res.status(500).json({ error: 'Error al llamar al procedimiento almacenado' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}