import express from 'express';
import cors from 'cors';
import configEnv from './config/env.js';
import authRouter from './routes/auth.route.js';

configEnv();

const port: number = Number(process.env.PORT);
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.use('/auth', authRouter);

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});