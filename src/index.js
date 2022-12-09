const express = require('express');
const route = require('./route/route');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://saurabhs:saurabh123@sauproject1.yftc7po.mongodb.net/saurabh23-DB",
{ UseNewUrlParser: true })
    .then(() => console.log("MongoDb is Connected"))
    .catch(err => console.log(err))

app.use('/', route);
app.listen(3000, function () {
    console.log('Express app running on port'+  3000)
});
