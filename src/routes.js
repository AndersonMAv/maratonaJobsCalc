//biblioteca para criar o servidor
const express = require('express')
//parte do express que ira criar as rotas
const routes = express.Router()
//Importar Controles do ProfilleController
const ProfilleController = require('./controllers/ProfileController')
//Importar Controles do JobController
const JobController = require('./controllers/JobController')
//Importar indes DashboardController
const DashboardController = require('./controllers/DashboardController')


routes.get('/', DashboardController.index)
routes.get('/job', JobController.create)
routes.post('/job', JobController.save)
routes.get('/job/:id', JobController.show)
routes.post('/job/:id', JobController.update)
routes.post('/job/delete/:id', JobController.delete)
routes.get('/profile', ProfilleController.index)
routes.post('/profile', ProfilleController.update)



//exporta rotas para o server
module.exports = routes;