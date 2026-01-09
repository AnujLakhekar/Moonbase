import express from 'express';
import {config} from 'dotenv';

config()
import cors from 'cors';
import Auth from './src/routes/auth.route.js';

const app = express();
const PORT = process.env.port || 3000;
app.use(cors({
    origin: [
        "localhost:3000",
        "http://localhost:3000",
        process.env.Frontend_URL
    ],
}));

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use('/api/auth', Auth);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})