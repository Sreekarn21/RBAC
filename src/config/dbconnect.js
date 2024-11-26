const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        // Establish connection to MongoDB
        const connect = await mongoose.connect(process.env.CONNECTION_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Database connected: ${connect.connection.host}, ${connect.connection.name}`);
    } catch (err) {
        console.error(`Database connection error: ${err.message}`);
        process.exit(1); // Exit the process with failure
    }
};

module.exports = dbConnect;
