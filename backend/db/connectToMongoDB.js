import mongoose from 'mongoose'

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to ChatApp-DB");
    } catch (err) {
        console.log("Error connecting to MongoDB", err.message);
    }
}

export default connectToMongoDB;