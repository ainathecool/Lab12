const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT || 8000;


const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to db");
})

app.use(cors());
app.use(express.json());

const UserRouter = require('./routes/users');

app.use('/users', UserRouter)
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});