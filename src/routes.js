//biblioteca para criar o servidor
const express = require('express')
//parte do express que ira criar as rotas
const routes = express.Router()
//caminho até a pasta views windows usar \\ 
const views = __dirname + "\\views\\"

//transformar dados do profile
const profile = {
    name: "Anderson",
    avatar: "https://avatars.githubusercontent.com/u/89303684?v=4",
    "monthly-budget": 3000,
    "days-per-week": 5,
    "hours-per-day": 5,
    "vacation-per-year": 4,
}

//req, res
routes.get('/', (req, res) => res.render(views + "index"))
routes.get('/job', (req, res) => res.render(views + "job"))
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))



//exporta rotas para o server
module.exports = routes;