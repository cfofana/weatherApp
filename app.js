if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config();
}
const API_KEY = process.env.WEATHERAPP_API_KEY;
const express = require('express');
const app = express();
const port = 3000;
const https = require('https');

// get data from API
let units = "imperial";
let q = "q=London";
const url = "https://api.openweathermap.org/data/2.5/weather?";
const fullUrl = url+q+"&appid="+API_KEY;


app.get('/weather', function(req,res){
    https.get(fullUrl, (response)=>{
        console.log("statusCode: " , response.statusCode);
        console.log("headers: ", response.headers);
        response.on("data", function(data){
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            let icon = weatherData.weather[0].icon;
            icon = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            //console.log("Temp is " + temp);
            //console.log("Description: "+ description);
            res.write("<h1>The temperature in London is: " + temp + "<sup>o</sup>C</h1>");
            res.write("<h4>The weather is described as " + description + ".</h4>");
            res.write('<img src=' + icon + '>');
            res.send();
            
        })
    })
    
})
app.post('/weather', function(req, res){

})

// open up server
app.listen(port, function(req, res){
    console.log("Server is up and running");
})