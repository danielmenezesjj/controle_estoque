const bodyParser = require('body-parser')
const produtos = require('./ProdutosRoute')
const empresas = require('./EmpresasRoute')
const users = require('./UsersRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(produtos)
    app.use(empresas)
    app.use(users)
    
}