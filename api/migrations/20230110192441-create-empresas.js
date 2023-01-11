'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CNPJ: {
        type: Sequelize.STRING
      },
      xNome: {
        type: Sequelize.STRING
      },
      xFant: {
        type: Sequelize.STRING
      },
      IE: {
        type: Sequelize.STRING
      },
      CRT: {
        type: Sequelize.STRING
      },
      xLgr: {
        type: Sequelize.STRING
      },
      nro:{
        type: Sequelize.STRING
      },
      xCpl:{
        type: Sequelize.STRING
      },
      xBairro:{
        type: Sequelize.STRING
      },
      cMun:{
        type: Sequelize.STRING
      },
      xMun:{
        type: Sequelize.STRING
      },
      UF: {
        type: Sequelize.STRING
      },
      CEP: {
        type: Sequelize.STRING
      },
      cPais: {
        type: Sequelize.STRING
      },
      xPais: {
        type: Sequelize.STRING
      },
      fone: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Empresas');
  }
};