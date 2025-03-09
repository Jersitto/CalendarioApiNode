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
const muestraeventoRouter = require('./routes/muestraeventoRouter.js');
const calendarioEventoRouter = require('./routes/calendarioeventoRouter.js');
const dispositivomovilRouter = require('./routes/dispositivomovilRouter.js');
const notificaciondeasistencia = require('./routes/notificaciondeasistenciaRouter.js');
const ProyectoRouter = require('./routes/proyectoRouter.js');
const rapRouter = require('./routes/rapRouter.js');
const recordatorioRouter = require('./routes/recordatorioRouter.js');
const tematicaRouter = require('./routes/tematicaRouter.js');
const sistemaAnaliticaRouter = require('./routes/sistemaAnaliticaRouter.js');

// Configurar body parser
app.use(bodyParser.json()); // for parsing application/json

// Configurar CORS
app.use(cors({
    origin: 'http://localhost:5173', // Cambia esto al origen de tu aplicación cliente
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
app.use('/', muestraeventoRouter);
app.use('/', calendarioEventoRouter);
app.use('/', dispositivomovilRouter);
app.use('/', notificaciondeasistencia);
app.use('/', ProyectoRouter);  // Ruta para Proyectos
app.use('/', rapRouter);
app.use('/', recordatorioRouter); // Ruta para Recordatorios
app.use('/', tematicaRouter);
app.use('/', sistemaAnaliticaRouter);


// start the server

const PORT = 3032;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});