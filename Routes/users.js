import express, { request } from 'express';

// initialising router
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello');
});

export default router;