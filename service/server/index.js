const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();
require('dotenv').config()
const axios = require('axios')
const port = process.env.PORT || 3001;


app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../public')));



app.get('/products/:product_id/related', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11050/related', {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  }).then((response) => {
    //console.log(response.data)
    res.send(response.data)
  }) 
})

app.get('/products', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products', {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  }).then((response) => {
    //console.log(response.data)
    res.send(response.data)
  }) 
})

app.get('/products/:product_id/styles', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hrnyc/products/11020/styles', {
    headers: {
      Authorization: process.env.ACCESS_TOKEN,
    },
  }).then((response) => {
    //console.log(response.data)
    res.send(response.data)
  }) 
})


app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});
