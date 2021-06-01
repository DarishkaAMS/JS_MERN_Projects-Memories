import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('It is Alive!!!')
});

export default router;