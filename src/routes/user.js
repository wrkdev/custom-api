import { Router } from 'express';
import { handleUser } from '../functions/user';

const router = Router();

router.get('/', (req, res) => {
  return res.send('User Home Page');
});

router.get('/:userId', (req, res) => {
  return res.send(handleUser(req.params.userId));
});

export default router;