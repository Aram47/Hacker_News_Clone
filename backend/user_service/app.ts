import express from 'express';
import cors from 'cors';
import configEnv from './config/env.js';
import connectDB from './config/db.js';
import usersRoute from './routes/users.route.js';
import startUsersGrpcService from './config/grpc.server.js';

configEnv();
connectDB();

const port: number = Number(process.env.PORT);
const app = express();

app.use(express.json());
app.use(cors({
  origin: '*',
}));

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log(`Server is listening on PORT: ${port}`);
});

startUsersGrpcService();