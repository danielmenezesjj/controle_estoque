const database = require("../models");
const fs = require("fs").promises;
const { XMLParser } = require("fast-xml-parser");
const util = require("util");
const sequelize = require("sequelize");

class ProdutosController {
  static async listaProdutos(req, res) {
    try {
      const todosOsProdutos = await database.Produtos.sequelize.query(
        "select * from Produtos"
      );
      return res.status(200).json(todosOsProdutos);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async createProdutos(req, res) {
    try {
      const parser = new XMLParser();
      const data = await fs.readFile(req.file.path, { encoding: "utf-8" });
      const jsonData = parser.parse(data);
      const produtos = jsonData.nfeProc.NFe.infNFe.det;
      const exemplo = produtos.map(({ prod }) => {
        return prod;
      });
      const newProdutos = await database.Produtos.bulkCreate(exemplo);
      return res.status(201).json(newProdutos);
    } catch (error) {
      console.error(error);
    }
  }

  static async createproduto(req, res) {
    try {
      const parser = new XMLParser();
      const data = await fs.readFile(req.file.path, { encoding: "utf-8" });
      const jsonData = parser.parse(data);
      const produto = jsonData.nfeProc.NFe.infNFe.det.prod;
      console.log(produto);
      const newProdutos = await database.Produtos.create(produto);
      return res
        .status(201)
        .send({ mensagem: "Produto Cadastrado com sucesso!" });
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = ProdutosController;
