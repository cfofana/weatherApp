if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const API_KEY = process.env.WEATHERAPP_API_KEY;
const express = require('express');
const app = express();
const port = 3000;
const https = require('https');

// get data from API
const units = "imperial";
const q = "q=London";
const icon = "";
const url = "https://api.openweathermap.org/data/2.5/weather?";


app.get('/weather', function(req,res){
   // console.log(req.body);
    
})
app.post('/weather', function(req, res){

})

// open up server
app.listen(port, function(req, res){
    console.log("Server is up and running");
})