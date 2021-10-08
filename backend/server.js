const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const logger = require('morgan');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(logger('dev'));


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect('mongodb://localhost:27017/players',{
  useNewUrlParser : true,
  // useCreateIndex : true,
  useUnifiedTopology : true
});

// mongoose.connect(uri, { useNewUrlParser: true, useCreatendex: true },err=>{if(err) console.log(err);});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const playerRouter = require('./routes/player.js');

app.use('/players', playerRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});