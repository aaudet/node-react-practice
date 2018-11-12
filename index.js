const express = require('express');
//common js modules
//do not use import express from 'express' unless in the react side for es2015 modules
const app = express();
//creates the new app.
app.get('/', (req, res) => {
  res.send ({hi: 'there'});
});
//get is associated with geting info.
//'/' if anyone visits localhost:5000/ then they get this information. Looking for that request
//req is an object that has incoming request.
//res represents the response
//res.send sends the js object.

//in pacakage.json, using the start json bit to instruct heroku what code will execute it.

//.gitignore means that deployment does not use all of the dependenceis

const PORT = process.env.PORT || 5000
//dynamically figures out which port to listen to
//injects environment vairables. Variables set during the runtime.
//Lets Heroku tell us info on the fly, or if there's Heroku assign it to port.

app.listen(PORT);
//express tells node to listen to the port 5000
//node is the gatekeeper that sends info to handlers in express
