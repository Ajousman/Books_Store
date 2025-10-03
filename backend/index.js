import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js';
import cors from 'cors';

const app = express();
const port=process.env.PORT || 5555

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
app.use(cors());

app.get('/', (request, response) => {
  return response.status(234).send('Welcome To MERN Stack Tutorial');
});

app.use('/books', booksRoute);

// Connect to MongoDB
mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database successfully');
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log('MongoDB Connection Error:', error.message);
  });
