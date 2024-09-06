import http from 'http';
import express from 'express';
import { Server } from 'socket.io';

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:4000",    // Frontend URL
        methods: ["GET", "POST"],
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};   // {userId: socket.id}

io.on('connection', (socket) => {
    console.log("A user is connected", socket.id);
    const userId = socket.handshake.query.userId;
    if (userId != 'undefined') {
        userSocketMap[userId] = socket.id;
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    }

    // socket.on is used to listen for an event.
    // Can be used in both client and server
    socket.on('disconnect', () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit('getOnlineUsers', Object.keys(userSocketMap));
    })
})

export { app, io, server };