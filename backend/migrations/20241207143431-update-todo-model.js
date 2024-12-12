'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    // Remove createdAt and updatedAt if they exist
    await queryInterface.removeColumn('todos', 'createdAt');
    await queryInterface.removeColumn('todos', 'updatedAt');
    
  },

  async down(queryInterface, Sequelize) {
    // Add back createdAt and updatedAt for rollback
    await queryInterface.addColumn('Todos', 'createdAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
    await queryInterface.addColumn('Todos', 'updatedAt', {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
  },
};
