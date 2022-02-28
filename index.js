/*const express = require("express");
const app = express()
const port = 8000;
const fs = require("fs");
const mongoose = require("mongoose");


mongoose.connect('mongodb://localhost:27017/priyal',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});
var collection = db.collection("priyaldata");

app.get('/',(req,res)=>{
   res.send("hello world")
})

app.get('/movies',(req,res)=>{
   fs.readFile(__dirname + '/' + 'movie.json', 'utf8', (err, data) => {
    res.end(data);
   });
})

app.get("/personnel", (request, response) => {
  collection.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});

app.listen(port,()=>{
  console.log(`app listening at http://localhost:${port}`)
})*/



//another attempt


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

app.get('/contact',(req,res) => {
  res.send("here is our contact details");
});

app.get('/randoms', (req,res) => {
  fs.readFile(__dirname + '/' + '/random.json', 'utf8', (err,data) =>{
    res.end(data);
  });
});

app.get("/personnel", (request, response) => {
  collection.find({}).toArray((error, result) => {
      if(error) {
          return response.status(500).send(error);
      }
      response.send(result);
  });
});





app.listen(port,() => {
  console.log(`app is listening at https://localhost:${port}`);
});