//! ChatApp Server 
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import path from 'path';

import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

const PORT = process.env.PORT || 3000;
dotenv.config();

const __dirname = path.resolve();

//! Middlewares
app.use(express.json());        // Parse requests with JSON (from req.body)
app.use(cookieParser())         // Parse cookies from req.cookies

//! Routes
//? Auth Routes
app.use('/api/auth', authRoutes);
//? Message Route 
app.use('/api/messages', messageRoutes);
//? User Routes 
app.use('/api/users', userRoutes);

// Serve the frontend
app.use(express.static(path.join(__dirname, '/frontend/dist')));

// Serve the index.html file if it doesn't recognize the route
app.get("*", (req, res) => {
    res.send(path.join(__dirname, '/frontend/dist/index.html'))
})

//? Home Route 
// app.get('/', (req, res) => {
//     res.send('Home Route')
// })


server.listen(PORT, () => {
    //? DB
    connectToMongoDB();
    console.log(`server.js listening on port ${PORT}`);
});