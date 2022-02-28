const express = require("express");
const app = express();
const port= 8000;
const mongoose = require("mongoose");
const db = mongoose.connection;
const collection = db.collection("priyaldata2");
const fs = require('fs');

mongoose.connect('mongodb://localhost:27017/priyal',
{
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

db.on("error", console.error.bind(console, "connection error: "));
db.once("open",  () => {
  console.log("Connected successfully");
});


app.get('/', (req, res) => {
  res.send("hello world");
});



app.get('/randoms', (req,res) => {
  fs.readFile(__dirname + '/' + '/random.json', 'utf8', (err,data) =>{
    res.end(data);
  });
});

app.listen(port,() => {
  console.log(`app is listening at https://localhost:${port}`);
});