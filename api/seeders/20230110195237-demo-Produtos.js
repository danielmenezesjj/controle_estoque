'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Produtos', [
      {
        cProd:"EMPRESTATESTE",
        cEAN: "EMPRESTATESTE",
        xProd: "EMPRESTATESTE",
        NCM: "EMPRESTATESTE",
        CFOP: "EMPRESTATESTE",
        uCom: "EMPRESTATESTE",
        qCom: "EMPRESTATESTE",
        vUnCom: "EMPRESTATESTE",
        vProd: "EMPRESTATESTE",
        cEANTrib: "EMPRESTATESTE",
        uTrib: "EMPRESTATESTE",
        qTrib: "EMPRESTATESTE",
        vUnTrib: "EMPRESTATESTE",
        indTot: "EMPRESTATESTE",
        nLote: "EMPRESTATESTE",
        qLote: "EMPRESTATESTE",
        dFab: "EMPRESTATESTE",
        dVal: "EMPRESTATESTE",
        EmpresaId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {})
},


  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};