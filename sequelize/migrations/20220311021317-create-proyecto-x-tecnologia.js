'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ProyectoXTecnologia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idproyecto: {
        type: Sequelize.INTEGER
      },
      idtecnologia: {
        type: Sequelize.INTEGER
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
    //crar un Foreign key para idproyecto
    await queryInterface.addConstraint("ProyectoXTecnologia", {
      type: "FOREIGN KEY",
      name: "FK_PROYECTOXTECNOLOGIA_PROYECTO",
      fields : ["idproyecto"], 
      references : {
         table :"Proyecto",
         field:"id"
      },
    })
    //crar un Foreign key para idtecnologia

    await queryInterface.addConstraint("ProyectoXTecnologia", {
      type: "FOREIGN KEY",
      name: "FK_PROYECTOXTECNOLOGIA_TECNOLOGIA",
      fields : ["idtecnologia"], 
      references : {
         table :"Tecnologia",
         field:"id"
      },
    })
    
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeContraint("ProyectoXTecnologia","FK_PROYECTOXTECNOLOGIA_TECNOLOGIA")
    await queryInterface.removeContraint("ProyectoXTecnologia","FK_PROYECTOXTECNOLOGIA_PROYECTO")
    await queryInterface.dropTable('ProyectoXTecnologia');
  }
};