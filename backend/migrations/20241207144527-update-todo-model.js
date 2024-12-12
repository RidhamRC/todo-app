'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove createdAt and updatedAt if they exist
    
    await queryInterface.removeColumn('todos', 'status');
    
  },

  async down(queryInterface, Sequelize) {
    // Add back createdAt and updatedAt for rollback
    await queryInterface.addColumn('todos', 'status', {
      allowNull: true,
      type: Sequelize.STRING,
     
    });

  },
};
