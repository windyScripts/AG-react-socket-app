import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();


dotenv.config();

// Define routes here

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
  }));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes here

async function start() {
    await mongoose.connect(process.env.DB_STRING);
    console.log('Database connected. :)');
    app.listen(process.env.PORT || 3000);
  }
  
  start();