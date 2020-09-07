import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send('User Home Page');
});

router.get('/:userId', (req, res) => {
  return res.send(`Single User: ${req.params.userId}`);
});

export default router;