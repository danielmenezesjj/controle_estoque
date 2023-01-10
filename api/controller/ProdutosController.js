const database = require("../models");
const fs = require("fs").promises;
const { XMLParser } = require("fast-xml-parser");
const util = require("util");
const sequelize = require("sequelize");

class ProdutosController {

  static async listaProdutos(req, res) {
    try {
      const todosOsProdutos = await database.Produtos.findAll();
      return res.status(200).json(todosOsProdutos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async listaUmProduto(req, res){
    const {id} = req.params
    try {
      const umProduto = await database.Produtos.findOne({where: {id: Number(id)}})
      return res.status(200).json(umProduto)
    } catch (error) {
      console.error(error)
    }
  }

  static async createProdutosXML(req, res) {
    try {
      let empresa_id = req.body;
      const parser = new XMLParser();
      const data = await fs.readFile(req.file.path, { encoding: "utf-8" });
      const jsonData = parser.parse(data);
      const produtos = jsonData.nfeProc.NFe.infNFe.det;
      const result = produtos.map(({ prod }) => {
        let p = { ...prod, ...prod.rastro, ...empresa_id };
        p.nLote = `${p.nLote}`;
        delete p.rastro;
        return p;
      });
       const newProdutos = await database.Produtos.bulkCreate(result);
       return res.status(201).json(newProdutos);
    } catch (error) {
      console.log(error)
    }
  }

  static async createprodutoXML(req, res) {
    try {
      const parser = new XMLParser();
      const data = await fs.readFile(req.file.path, { encoding: "utf-8" });
      const jsonData = parser.parse(data);
      const produto = jsonData.nfeProc.NFe.infNFe.det.prod;
      let p = { ...produto, ...produto.rastro };
      delete p.rastro;
      const newProdutos = await database.Produtos.create(p);
      return res.status(201).json(newProdutos)
    } catch (error) {
      return res.status(405).send({mensagem: 'XML CONTEM MAIS DE UM PRODUTO'})
    }
  }
  
  static async createProduto(req, res){
    const newProduto = req.body;
    try {
      const addProduto = await database.Produtos.create(newProduto)
      return res.status(201).json(addProduto)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async atualizaProduto(req, res){
    const {id} = req.params;
    const novasInfos = req.body;
    try {
      await database.Produtos.update(novasInfos, {where: {id: Number(id)}})
      const ProdutoAtualizado = await database.Produtos.findOne({where: {id: Number(id)}})
      return res.status(200).json(ProdutoAtualizado)
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  static async deleteProduto(req, res){
    const {id} = req.params
    try {
      await database.Produtos.destroy({where: {id: Number(id)}})
      return res.status(200).json({mensagem: 'Produto deletado com sucesso!'})
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }


}
module.exports = ProdutosController;
