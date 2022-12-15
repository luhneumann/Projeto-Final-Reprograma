require('dotenv').config();

const swaggerUi = require('swagger-ui-express')
const express = require('express');
const app = express()
const cors = require('cors');

const database = require('./database/mongoConfig')
const trocaTrocaRoutes = require('./routes/trocaTrocaRoutes')
const swaggerDocs = require('./swagger.json')

app.use(cors());
app.use(express.json());


app.use("/trocatroca", trocaTrocaRoutes)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
database.connect();

module.exports = app
