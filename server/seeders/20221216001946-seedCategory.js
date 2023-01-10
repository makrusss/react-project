'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let query = require('../data/categories.json').map(el=>{
      delete el.id 
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
   await queryInterface.bulkInsert('Categories',query,{})
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.bulkDelete('Categories',null,{})
  }
};
