const express = require('express');
const { animals } = require('./data/animals');
const fs = require('fs')
const path = require('path');
const exp = require('constants');
const apiRoutes = require('./routes/apiRoutes')
const htmlRoutes = require('./routes/htmlRoutes');
const { ppid } = require('process');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware functions
// parse incoming string or array data
//takes incoming POST data and turns it into a key/value pair
app.use(express.urlencoded({ extended:true }))
//parse incoming JSON data
app.use(express.json())
//uses public folder
app.use(express.static('public'))
app.use('/api', apiRoutes)
app.use('/', htmlRoutes)


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
