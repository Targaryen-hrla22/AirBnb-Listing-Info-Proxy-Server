const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');

const app = express();
var PORT = process.env.PORT || 5000; 

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../static')));


app.listen(PORT, (err) => {
  if(err){
    console.log("There was an err starting up the server..", err);
  } else {
    console.log("Successfully connected to PORT: ", PORT);
  }
});
