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
        xLgr: 'RUA DOS TRES IRMAOS',
        nro: '212/218',
        xBairro: 'VILA PROGREDIOR',
        cMun: '3550308',
        xMun: 'Sao Paulo',
        UF: 'SP',
        CEP: '5615190',
        cPais: '1058',
        xPais: 'BRASIL',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        CNPJ: '43365816000121',
        xNome: "VALDEQUIMICA PRODUTOS QUIMICOS LTDA",
        xFant: 'null',
        IE: '104505966',
        CRT: '3',
        xLgr: 'V PRIMARIA',
        nro: '4D',
        xCpl: 'Qd 08A Modulo I e II',
        xBairro: 'DAIA',
        cMun: '5201108',
        xMun: 'ANAPOLIS',
        UF: 'GO',
        CEP: '75132105',
        cPais: '1058',
        xPais: 'BRASIL',
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