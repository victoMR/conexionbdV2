import prisma from '../../prisma/client';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const viewData = await prisma.Vista_Product.findMany();

      res.status(200).json({ viewData });
    } catch (error) {
      res.status(500).json({ error: 'Error al buscar productos' });
    }
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
