"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Taxes",
      [
        {
          minIncome: 0,
          maxIncome: 49999,
          taxAmount: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 50000,
          maxIncome: 60000,
          taxAmount: 250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 60001,
          maxIncome: 70000,
          taxAmount: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 70001,
          maxIncome: 80000,
          taxAmount: 750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 80001,
          maxIncome: 90000,
          taxAmount: 1000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 90001,
          maxIncome: 100000,
          taxAmount: 1250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 100001,
          maxIncome: 110000,
          taxAmount: 2500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 110001,
          maxIncome: 120000,
          taxAmount: 3750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 120001,
          maxIncome: 130000,
          taxAmount: 5000,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 130001,
          maxIncome: 140000,
          taxAmount: 6250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 140001,
          maxIncome: 150000,
          taxAmount: 7500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 150001,
          maxIncome: 175000,
          taxAmount: 10625,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 175001,
          maxIncome: 200000,
          taxAmount: 13750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 200001,
          maxIncome: 225000,
          taxAmount: 18750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 225001,
          maxIncome: 250000,
          taxAmount: 23750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 250001,
          maxIncome: 275000,
          taxAmount: 28750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 275001,
          maxIncome: 300000,
          taxAmount: 33750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 300001,
          maxIncome: 350000,
          taxAmount: 46250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 350001,
          maxIncome: 400000,
          taxAmount: 53750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 400001,
          maxIncome: 450000,
          taxAmount: 71250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 450001,
          maxIncome: 500000,
          taxAmount: 83750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 500001,
          maxIncome: 600000,
          taxAmount: 116250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 600001,
          maxIncome: 700000,
          taxAmount: 148750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 700001,
          maxIncome: 800000,
          taxAmount: 181250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 800001,
          maxIncome: 900000,
          taxAmount: 213750,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          minIncome: 900001,
          maxIncome: 1000000,
          taxAmount: 246250,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Taxes", null, {});
  },
};
