import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './router/user.js';

const app = express();

app.use(express.json());

app.use(cors());

app.use('/users', userRouter);

const uri =
  'mongodb+srv://asdasd:asdasd@rudweew.14x9kc7.mongodb.net/?retryWrites=true&w=majority';
const port = 500;

const connect = () => {
  try {
    mongoose.set('strictQuery', true);
    mongoose.connect(uri, {}).then(() => {
      console.log('Successfully connected mongodb');
    });
  } catch (error) {
    console.error('Couldnt Connect');
    process.exit(1);
  }
};

app.listen(port, async () => {
  connect();
  console.log(`Server running at localhost:${port}`);
});
