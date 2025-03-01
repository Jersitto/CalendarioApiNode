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
const competenciaRouter = require('./routes/competenciaRouter.js');
const cursoRouter = require('./routes/cursoRouter.js');
const saberesRouter = require('./routes/saberesRouter.js');
const conocimientosRouter = require('./routes/conocimientosRouter.js');
const archivoRouter = require('./routes/archivoRouter.js');
const notificacionRouter = require('./routes/notificacionRouter.js');
const faseRouter = require('./routes/faseRouter.js');
const comentarioRouter = require('./routes/comentarioRouter.js');

// Configurar body parser
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
app.use('/', competenciaRouter); 
app.use('/', cursoRouter);
app.use('/', saberesRouter);
app.use('/', conocimientosRouter);
app.use('/', archivoRouter);
app.use('/', notificacionRouter);
app.use('/', faseRouter);
app.use('/', comentarioRouter);
// start the server

const PORT = 3032;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});