'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NmUsuario: {
        type: Sequelize.STRING
      },
      Login: {
        type: Sequelize.STRING
      },
      Senha: {
        type: Sequelize.STRING
      },
      ConfirmSenha: {
        type: Sequelize.STRING
      },
      CadastradoPor: {
        type: Sequelize.STRING
      },
      Setor: {
        type: Sequelize.STRING
      },
      StatusUser: {
        type: Sequelize.STRING
      },
      DtCadastro: {
        type: Sequelize.STRING
      },
      AlterSenha: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};