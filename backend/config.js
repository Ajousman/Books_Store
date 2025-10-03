import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const PORT = 5555;

export const mongoDBURL = process.env.MONGO_URI || 'mongodb+srv://root:root@books-store-abdu.kttxzie.mongodb.net/books-collection?retryWrites=true&w=majority&appName=Books-Store-Abdu';