  
import express from 'express'
// const express = require("express");


import dotenv from 'dotenv'
// const dotenv = require('dotenv')

import {products} from './data/products.js';
// const products = require("./data/products");


dotenv.config({ path : "./backend/.env"} );

const app = express();



app.get("/", (req, res) => {

  res.send("Api is running");

});


app.get("/api/products", (req, res) => {

    res.json(products);
});


app.get('/api/products/:id', (req, res) => {

    const product = products.find(product => product._id === +req.params.id)

    res.json(product);

})

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`server running in ${process.env.NODE_ENV} mode on port:${PORT}.`));