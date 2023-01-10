'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
	up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Empresas', [
      {
        CNPJ: '10690195000100',
        xNome: "GEMINI IND. DE INS. FARMACEUTICOS LTDA",
        xFant: 'GEMINI GOIAS',
        IE: '104505966',
        CRT: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CNPJ: '43365816000121',
        xNome: "VALDEQUIMICA PRODUTOS QUIMICOS LTDA",
        xFant: 'null',
        IE: '104505966',
        CRT: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
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