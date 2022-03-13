'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Tecnologia', [
       {
         nombre: "Java",
         createdAt: new Date(),
         updatedAt : new Date() 
       },
       {
        nombre: "HTTP",
        createdAt: new Date(),
        updatedAt : new Date() 
       },
       {
        nombre: "JavaScript",
        createdAt: new Date(),
        updatedAt : new Date() 
       },
       {
        nombre: "Lenguaje C",
        createdAt: new Date(),
        updatedAt : new Date() 
       }

     ])

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Tecnologia', null, {});

  }
};
