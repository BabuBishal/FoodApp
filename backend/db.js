const mongoose = require('mongoose')

const connectToMongoDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
      } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
      }
}

module.exports = connectToMongoDb