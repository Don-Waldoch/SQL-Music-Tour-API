'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('bands', [{
      name: 'The Useful Books',
      genre: 'Rock',
      available_start_time: '2016-05-10 11:00:00 -0600',
      end_time: '2016-05-10 23:00:00 -0600'
    }, {
      name: 'The Who',
      genre: 'Rock',
      available_start_time: '2016-05-10 19:00:00 -0600',
      end_time: '2016-05-10 23:00:00 -0600'
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    // note that this deletes ALL data from the bands table
    await queryInterface.bulkDelete('bands', null, {})
  }
};
