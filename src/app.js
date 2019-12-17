/**
 * Archivo encargado de configurar express
 */
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev')) //ver mensajes cortos
app.use(require('./routes/index'))

module.exports = app
