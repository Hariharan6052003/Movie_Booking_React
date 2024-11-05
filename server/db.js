const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
          'mongodb+srv://hariharan:Hari%402003@cluster0.8lrqj.mongodb.net/hari3?retryWrites=true&w=majority'
         
        );
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
