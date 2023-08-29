import adoptionsRouter from './routes/adoption.router.js';
import cookieParser from 'cookie-parser';
import express from 'express';
import mongoose from 'mongoose';
import petsRouter from './routes/pets.router.js';
import sessionsRouter from './routes/sessions.router.js';
import usersRouter from './routes/users.router.js';

const app = express();
const PORT = process.env.PORT||8080;
const connection = mongoose.connect("mongodb+srv://coder51220:coder2023@cluster0.4qaobt3.mongodb.net/coder51220")

app.use(express.json());
app.use(cookieParser());

app.use('/api/users',usersRouter);
app.use('/api/pets',petsRouter);
app.use('/api/adoptions',adoptionsRouter);
app.use('/api/sessions',sessionsRouter);

app.listen(PORT,()=>console.log(`Listening on ${PORT}`))
