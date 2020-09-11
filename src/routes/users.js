import { Router } from 'express';
import { createUser, getUsers, getUser, deleteUser, updateUser } from '../controllers/users';

const router = Router();

router.get('/', getUsers);

router.post('/', createUser);

router.get('/:id', getUser);

router.patch('/:id', updateUser);

router.delete('/:id', deleteUser);

export default router;