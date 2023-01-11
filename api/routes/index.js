const bodyParser = require('body-parser')
const produtos = require('./ProdutosRoute')
const empresas = require('./EmpresasRoute')
const estoque = require('./EstoqueRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(produtos)
    app.use(empresas)
    app.use(estoque)
}