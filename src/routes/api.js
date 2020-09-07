import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('You are on the api page.');
});

export default router;