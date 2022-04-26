// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const morgan = require('morgan');
const dotenv = require('dotenv');

// Configure dotenv
dotenv.config();

// Import routes
const pinataRoutes = require('./routes/pinatas');

// Instantiate Express
const app = express();

// Connect to Mongo
mongoose.connect(process.env.DB_CONNECT,{ useNewUrlParser: true, useUnifiedTopology: true } ,() => {
    console.log("DB connected!");
})

// Middlewares
app.use(express.json());
app.use(morgan('tiny'));
app.use(cors())

app.use('/api/pinatas', pinataRoutes);

// Start listening
app.listen(4000, () => {
    console.log("App is running on port 4000!")
})

