import express, { json } from 'express';
import router from './router';
import cors from 'cors';

const app = express();

app.use(json());
app.use(cors());
app.use('/api', router);

export default app;
