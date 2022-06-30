import { PrismaClient } from '@prisma/client';
import { validMatrix } from './middleware';
import { Router } from 'express';

const router = Router();
const prisma = new PrismaClient();

router.post('/matrix', validMatrix, async (req, res) => {
  const { name, data } = req.body;

  const { id } = await prisma.matrix.create({
    data: { name, data: JSON.stringify(data) },
  });

  res.json({ id });
});

router.get('/matrix/:id', async (req, res) => {
  const matrix = await prisma.matrix.findFirst({
    where: { id: req.params.id },
  });

  if (!matrix) {
    return res.status(404).json({
      error: 'Matrix not found',
    });
  }

  res.json({
    id: matrix.id,
    name: matrix.name,
    data: JSON.parse(matrix.data),
  });
});

router.put('/matrix/:id', validMatrix, async (req, res) => {
  const { name, data } = req.body;

  const { id } = await prisma.matrix.update({
    where: { id: req.params.id },
    data: { name, data: JSON.stringify(data) },
  });

  res.json({ id });
});

export default router;
