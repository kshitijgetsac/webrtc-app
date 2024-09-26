import { Socket } from "socket.io";
import http from "http";

const express = require('express');
import { Server } from 'socket.io';
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*"
    }
  });
io.on('connection', (socket: Socket) => {
    console.log('a user connected');
    
    })

  
server.listen(3000, () => {
      console.log('listening on *:3000');
  });