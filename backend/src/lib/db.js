import mongoose from "mongoose";
import { readFileSync } from "fs";
import { resolve } from "path";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 10000, // 10 seconds timeout
            socketTimeoutMS: 45000, // 45 seconds socket timeout
            tls: true, // Enable TLS/SSL
            tlsAllowInvalidCertificates: false, // Strict certificate validation
            retryWrites: true,
            w: "majority"
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error("❌ MongoDB Connection Error:", err.message);
        process.exit(1);
    }
};