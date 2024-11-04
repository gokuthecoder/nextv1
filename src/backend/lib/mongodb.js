import mongoose from 'mongoose';
import "dotenv/config";

let isConnected = false;

export async function connectToDatabase() {
    if (isConnected) {
        console.log('Already connected to database');
        return;
    }

    try {
        const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

        isConnected = true;
        if (process.env.NODE_ENV === 'development') {
            console.log('Connected to MongoDB');
        }

        return dbConnection.connection.host;
    } catch (error) {
        console.log('Failed to connect to MongoDB:', error.message)
    }
}