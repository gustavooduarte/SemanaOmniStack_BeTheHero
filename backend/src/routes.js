const express = require('express')

const routes = express.Router();

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

//Rota para login (criar sessão)
routes.post('/sessions', SessionController.create);

//Todas as rotas para as ONGs
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

//Rota para profile (principalmente para visualizar informações dos incidents que a ONG cadastrou)
routes.get('/profile', ProfileController.index);


//Todas as rotas para os Incidents
routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;