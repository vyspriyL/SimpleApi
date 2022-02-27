const express = require("express");
const app = express()
const port = 8000;

app.get('/',(req,res)=>{
   res.send("hello world")
})

app.listen(port,()=>{
  console.log(`app listening at http://localhost:${port}`)
})