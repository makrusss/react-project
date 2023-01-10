'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let query = require('../data/products.json').map(el=>{
      delete el.id 
      el.slug = el.name.split(" ").join("-")
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
   await queryInterface.bulkInsert('Products',query,{})
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('Products',null,{})
  }
};
