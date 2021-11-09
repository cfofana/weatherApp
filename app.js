const express = require('express');
const app = express();
const port = 3000;


// open up server
app.listen(port, function(req, res){
    console.log("Server is up and running");
})