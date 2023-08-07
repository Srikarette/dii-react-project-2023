'use strict';
const express = require('express');
const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/userpostRoutes');

const app = express();

// Load environment variables from config.env (if you haven't already)
require('dotenv').config({ path: './config.env' });

// Define routes
app.use('/api/v1/users', userRoute);
app.use('/api/v1/userspost', postRoute);

module.exports = app;
