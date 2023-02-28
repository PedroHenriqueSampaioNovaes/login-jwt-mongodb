require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter');
const adminRouter = require('./routes/adminRouter');

mongoose
  .connect(process.env.MONGO_CONNECTION_URL)
  .then(() => console.log('Mongo Connected'))
  .catch((error) => console.log(error));

app.use('/user', express.json(), userRouter);
app.use('/admin', adminRouter);

app.listen(process.env.PORT, () => console.log('Server Running'));
