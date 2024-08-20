//! ChatApp Server 
import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`server.js listening on port ${PORT}`);
});