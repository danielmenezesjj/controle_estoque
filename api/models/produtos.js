"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Produtos.init(
    {
      cProd: DataTypes.STRING,
      cEAN: DataTypes.STRING,
      xProd: DataTypes.STRING,
      NCM: DataTypes.STRING,
      CFOP: DataTypes.STRING,
      uCom: DataTypes.STRING,
      qCom: DataTypes.STRING,
      vUnCom: DataTypes.STRING,
      vProd: DataTypes.STRING,
      cEANTrib: DataTypes.STRING,
      uTrib: DataTypes.STRING,
      qTrib: DataTypes.STRING,
      vUnTrib: DataTypes.STRING,
      indTot: DataTypes.STRING,
      nLote: DataTypes.STRING,
      qLote: DataTypes.STRING,
      dFab: DataTypes.STRING,
      dVal: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Produtos",
    }
  );
  return Produtos;
};
