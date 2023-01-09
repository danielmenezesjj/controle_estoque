const bodyParser = require('body-parser')
const produtos = require('./ProdutosRoute')

module.exports = app =>{
    app.use(bodyParser.json())
    app.use(produtos)
}