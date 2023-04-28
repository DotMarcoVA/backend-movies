const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Base de Datos Mongo conectada: ${conn.connection.host}`);
    } catch (error) {}
};

module.exports = connectDB;
