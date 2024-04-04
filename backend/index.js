require('dotenv').config();

const express = require('express')
const app = express()
const port = 1234

const mongoose = require('mongoose')

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
      }
}

app.get('/', (req,res) => {
    res.send('Hello World')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})