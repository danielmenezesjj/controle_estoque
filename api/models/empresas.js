'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
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
  });
  return Empresas;
};