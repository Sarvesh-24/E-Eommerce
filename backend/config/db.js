

import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config({path:' ./backend/.env'})


export const connectDB = async () => {

    try {

        const conn = await mongoose.connect(process.env.MONGO_URI, {

            useUnifiedTopology: true,
            useNewUrlParser: true,
        })
        
        console.log(`MongoDB connected:${conn.connection.host}`.cyan.underline)

    } catch (error) {
        
        console.error(`Error: ${error.message}`.red.underline.bold);

        process.exit(1);
    }
}
