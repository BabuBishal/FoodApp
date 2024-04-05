require('dotenv').config();

const express = require('express')
const app = express()
const port = 1234

const mongoose = require('mongoose');
const mongoDbConnectionString = 'mongodb+srv://bishal:<password>@foodapp.qz7psvo.mongodb.net/?retryWrites=true&w=majority&appName=Foodapp'

mongoose.connect(mongoDbConnectionString)
        .then(() => {
            console.log('App connected to database');
            app.listen(port, () => {
                console.log(`App is listening to port: ${port}`);
            });
        })
        .catch((error) => {
            console.log(error);
        })


app.get('/', (req,res) => {
    res.send('Hello World')
})

