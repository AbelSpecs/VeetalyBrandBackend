const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_CNN);
        console.log('Connected to Database');
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = {dbConnection}
