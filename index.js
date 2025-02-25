// App.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

// Importar rutas del router
const aprendizRouter = require('./routes/aprendizRouter.js');
const eventoRouter = require('./routes/eventoRouter.js');
const fichaRouter = require('./routes/fichaRouter.js');
const horarioRouter = require('./routes/horarioRouter.js');

//control + d para seleccionar todas las palabras iguales

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
app.use('/', fichaRouter);
app.use('/', horarioRouter);



// start the server

const PORT = 3030;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});