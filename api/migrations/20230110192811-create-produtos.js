'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      EmpresaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Empresas', key: 'id'}
      },
      cProd: {
        type: Sequelize.STRING
      },
      cEAN: {
        type: Sequelize.STRING
      },
      xProd: {
        type: Sequelize.STRING
      },
      NCM: {
        type: Sequelize.STRING
      },
      CFOP: {
        type: Sequelize.STRING
      },
      uCom: {
        type: Sequelize.STRING
      },
      qCom: {
        type: Sequelize.STRING
      },
      vUnCom: {
        type: Sequelize.STRING
      },
      vProd: {
        type: Sequelize.STRING
      },
      cEANTrib: {
        type: Sequelize.STRING
      },
      uTrib: {
        type: Sequelize.STRING
      },
      qTrib: {
        type: Sequelize.STRING
      },
      vUnTrib: {
        type: Sequelize.STRING
      },
      indTot: {
        type: Sequelize.STRING
      },
      nLote: {
        type: Sequelize.STRING
      },
      qLote: {
        type: Sequelize.STRING
      },
      dFab: {
        type: Sequelize.STRING
      },
      dVal: {
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
    await queryInterface.dropTable('Produtos');
  }
};