'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {

    static associate(models) {
      Empresas.hasMany(models.Produtos) // Uma empresa pra varios produtos

    }
  }
  Empresas.init({
    CNPJ: DataTypes.STRING,
    xNome: DataTypes.STRING,
    xFant: DataTypes.STRING,
    IE: DataTypes.STRING,
    CRT: DataTypes.STRING,
    xLgr: DataTypes.STRING,
    nro: DataTypes.STRING,
    xCpl: DataTypes.STRING,
    xBairro: DataTypes.STRING,
    cMun: DataTypes.STRING,
    xMun: DataTypes.STRING,
    UF: DataTypes.STRING,
    CEP: DataTypes.STRING,
    cPais: DataTypes.STRING,
    xPais: DataTypes.STRING,
    fone: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Empresas',
    paranoid: true
  });
  return Empresas;
};