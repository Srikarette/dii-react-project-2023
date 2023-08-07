'use strict';
const express = require('express');
const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');
const app = express();

app.use(express.json());
app.use('/api/v1/users', userRoute);
app.use('/api/v1/userspost', postRoute); 

module.exports = app;
