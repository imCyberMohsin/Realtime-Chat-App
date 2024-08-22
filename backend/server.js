//! ChatApp Server 
import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js'
import connectToMongoDB from './db/connectToMongoDB.js';

const app = express();
const PORT = process.env.PORT || 3000;
dotenv.config();

//! Middlewares
app.use(express.json());        // Parse requests with JSON (from req.body)

//? Auth Routes 
app.use('/api/auth/', authRoutes);

//? Home Route 
// app.get('/', (req, res) => {
//     res.send('Home Route')
// })


app.listen(PORT, () => {
    //? DB
    connectToMongoDB();
    console.log(`server.js listening on port ${PORT}`);
});