"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.belongsTo(models.Empresas, {
        foreignKey: "EmpresaId",
        scope: {
          EmpresaId: { where: {} },
          as: "ProdutosCadastrados",
        },
      });
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
      paranoid: true,
      // defaultScope: {
      //   where: {cProd : 593}
      // },
      // scopes: {
      //   todos: {where: {}}
      // }
    }
  );
  return Produtos;
};
