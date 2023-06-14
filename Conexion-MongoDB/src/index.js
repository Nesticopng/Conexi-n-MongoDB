require('dotenv').config()
const mongoose = require('mongoose')
const express = require('express')
const path = require('path')

const app = express()

app.get('/', (req,res) => {
    res.send('Base de datos')
})

app.listen(3000,() =>{
    console.log("Server on Port")
})

const MONGO_KEY = process.env.MONGO_KEY

mongoose.connect(MONGO_KEY, {
    useUnifiedTopology: true,
    useNewUrlParser: true
})

    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.log(err))