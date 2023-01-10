'use strict';
const {hashedPassword} = require('../helpers/bcrypt')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let query = require('../data/users.json').map(el=>{
      delete el.id 
      el.createdAt = new Date()
      el.updatedAt = new Date()
      el.password = hashedPassword(el.password)
      return el
    })
   await queryInterface.bulkInsert('Users',query,{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users',null,{})
  }
};
