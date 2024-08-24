//! ChatApp Server 
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import connectToMongoDB from './db/connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

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


//? Home Route 
// app.get('/', (req, res) => {
//     res.send('Home Route')
// })


app.listen(PORT, () => {
    //? DB
    connectToMongoDB();
    console.log(`server.js listening on port ${PORT}`);
});