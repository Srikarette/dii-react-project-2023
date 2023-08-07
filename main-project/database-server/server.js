'use strict';
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true, 
  })
  .then(() => {
    console.log('DB Connection successful!');
  })  
  .catch((err) => {
    console.error('DB Connection failed:', err);
  });
  

const app = require('../database-server/app');
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}...`);
});