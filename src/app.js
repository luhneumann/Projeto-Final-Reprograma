require('dotenv').config();

const express = require('express');
const app = express()
const cors = require('cors');

const database = require('./database/mongoConfig')
const trocaTrocaRoutes = require('./routes/trocaTrocaRoutes')

app.use(cors());
app.use(express.json());

app.use("/trocatroca", trocaTrocaRoutes)
database.connect();

module.exports = app
