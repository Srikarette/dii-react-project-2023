// app.js or server.js
const express = require('express');
const userRoute = require('./routes/userRoutes');
const postRoute = require('./routes/postRoutes');
const app = express();

app.use(express.json());
app.use('/api/v1/users', userRoute);
app.use('/api/v1/posts', postRoute); // Update the route to /api/v1/posts

module.exports = app;
