// App.js
const express = require('express');
const bodyParser = require('body-parser');
const aprendizRouter = require('./routes/aprendizRouter.js');
const eventoRouter = require('./routes/eventoRouter.js');
const cors = require('cors');
const app = express();

app.use(bodyParser.json()); // for parsing application/json

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:3030', // Cambia esto al origen de tu aplicación cliente
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Routes
app.use('/', aprendizRouter);
app.use('/', eventoRouter);

// start the server

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});