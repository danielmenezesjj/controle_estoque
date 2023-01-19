const database = require("../models");
const fs = require("fs").promises;
const { XMLParser } = require("fast-xml-parser");
const util = require("util");
const sequelize = require("sequelize");

class EmpresasController{
    
    static async ListaEmpresas(req, res){
        try {
            const listEmpresas = await database.Empresas.findAll();
            return res.status(200).json(listEmpresas)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async listaUmaEmpresa(req, res){
        const {id} = req.params
        try {
            const listaOneEmpresa = await database.Empresas.findOne({where: {id: Number(id)}})
            return res.status(200).json(listaOneEmpresa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async createEmpresaXML(req, res){
        try {
            const parser = new XMLParser();
            const data = await fs.readFile(req.file.path, { encoding: "utf-8" });
            const jsonData = parser.parse(data);
            const empresas = jsonData.nfeProc.NFe.infNFe.emit;
            let e = {...empresas, ...empresas.enderEmit, ...empresas.CNPJ}
            delete e.enderEmit
            const codEmpresa = empresas.CNPJ
            const verfEmpresas = await database.Empresas.findAll({where: {CNPJ: codEmpresa}}) 
            if(verfEmpresas != 0){
                return res.status(422).json('Empresa já cadastrada!')
            }
            const createEmpresa = await database.Empresas.create(e);
            return res.status(201).json(createEmpresa)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaEmpresa(req, res){
        const {id} = req.params
        const newInfos = req.body
        try {
            await database.Empresas.update(newInfos, ({where: {id: Number(id)}}))
            const EmpresaAtualizada = await database.Empresas.findOne({where: {id: Number(id)}})
            return res.status(200).json(EmpresaAtualizada)
        } catch (error) {
            return res.status(404).json(error.message)
        }
        
    }

    static async deleteEmpresa(req, res){
        const {id} = req.params
        try {
            const deleteEmpresa = await database.Empresas.destroy({where: {id: Number(id)}})
            return res.status(200).json({mensagem: 'Empresa Deletada Com sucesso!'})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async restoreEmpresa(req, res){
        const {id} = req.params
        try {
            await database.Empresas.restore({ where: {id: Number(id)}})
            return res.status(200).json(`O ${id} foi restaurado com sucesso!`)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}
module.exports = EmpresasController