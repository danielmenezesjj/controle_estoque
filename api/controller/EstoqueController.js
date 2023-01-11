const database = require('../models')
const sequelize = require('sequelize')


class EstoqueController{
    static async listaEstoque(req, res){
        const {codEmpresa} = req.body
        try {
            const listaEstoque = await database.Empresas.sequelize.query(`SELECT Empresas.id, * FROM Produtos INNER JOIN Empresas ON Produtos.EmpresaId = Empresas.id WHERE Empresas.id = '${codEmpresa}'`)
            const response = {
                Quantidade_de_Produtos_no_Estoque: listaEstoque.length,
                Produtos_no_estoque: listaEstoque
            }
            return res.status(200).json(response)

        } catch (error) {
            return res.status(500).json(error.message)
        }

    }

}




module.exports = EstoqueController