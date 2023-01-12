'use strict';
const useBcrypt = require('sequelize-bcrypt');
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {

    static associate(models) {

    }
  }
  Users.init({
    NmUsuario: DataTypes.STRING,
    Login: DataTypes.STRING,
    Senha: DataTypes.STRING,
    ConfirmSenha: DataTypes.STRING,
    CadastradoPor: DataTypes.STRING,
    Setor: DataTypes.STRING,
    StatusUser: DataTypes.STRING,
    DtCadastro: DataTypes.DATE,
    dtExpiracaoSenha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users',
    paranoid: true
  });
  return Users;
};

