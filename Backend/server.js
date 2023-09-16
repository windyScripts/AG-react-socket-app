import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

dotenv.config();

import roomRoutes from './routes/room.js'
import userRoutes from './routes/user.js'

const corsOptions = {
    origin: '*',
    methods: ['GET', 'POST'],
  }

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/',roomRoutes);
app.use('/auth',userRoutes)

const httpServer = createServer(app);

const start = async () => {
  await mongoose.connect(process.env.DB_STRING);
  console.log('Database connected. :)');
  httpServer.listen(process.env.PORT || 3000);
};

const io = new Server(httpServer, {
  cors: {
    origin: '*',
    allowedHeaders: ['Authorization'],
  },
});

io.on('connection', socket => {
  const token = socket.handshake.headers.authorization;
  socket.id = getSocketId(token);
  socket.on('join-room', (room, cb) => {
    socket.join(room);
    cb(`Connected to ${room}`);
  });

  // Socket commands
  socket.on('join room',room,cb => {
    socket.join(room);
    cb(`Connected to ${room}`);
  })
  socket.on('game end', (room,cb) => {
    try {
        socket.leave(room);
        cb(`Left ${room}`);
      } catch (err) {
        console.log(err);
      }
  })

});

start();
