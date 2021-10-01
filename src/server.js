const express = require("express")
const server = express()
const routes = require("./routes")

server.set('view engine', 'ejs')

//habilitar arquivos statics
server.use(express.static("public"))

//usa as rotas criada pelo routes
server.use(routes)

server.listen(3000, () => console.log('rodando'))