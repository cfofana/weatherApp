if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const API_KEY = process.env.WEATHERAPP_API_KEY;
const express = require('express');
const app = express();
const port = 3000;



app.get('/', function(req,res){
    res.sendFile(__dirname+"/index.html");
})

// open up server
app.listen(port, function(req, res){
    console.log("Server is up and running");
})