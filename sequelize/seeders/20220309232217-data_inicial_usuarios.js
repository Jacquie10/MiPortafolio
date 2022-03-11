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
     await queryInterface.bulkInsert('Usuario', [
       {
         nombre: "Jacquie Dueñas",
         username: "jacquie22",
         password : "i love you",
         createdAt: new Date(),
         updatedAt : new Date() 
       },
       {
        nombre: "Jose Esteban",
        username: "esteban22",
        password : "te amo Melani",
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
     await queryInterface.bulkDelete('Usuario', null, {});

  }
};
