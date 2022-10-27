require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const mongoUri = process.env.DATABASE_URL;
const db = mongoose.connection;

try {
   mongoose.connect(mongoUri,{ useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected")
  );

} catch (e) {
  console.log("could not connect");
}

app.use(express.json());

const subscriberRouter = require('./routes/subscribers');
app.use('/subscribers', subscriberRouter)

app.listen(3000, () => console.log('server running'));