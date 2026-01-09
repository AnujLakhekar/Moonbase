import express from 'express';


const router = express.Router();

// Sample authentication route

router.get('/', (req,res) => {
    res.send('Auth Route');
})

export default router;
