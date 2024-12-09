"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Salary_Slips", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        // Set `id` field as not updatable
        set() {
          throw new Error("id field is not updatable");
        },
      },
      employeeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users", //table name
          key: "id",
        },
      },
      salary: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      overtimePrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      overtimeHours: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      commission: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      totalPay: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // Set `createdAt` field as not updatable
        set() {
          throw new Error("createdAt field is not updatable");
        },
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        // Set `updatedAt` field as not updatable
        set() {
          throw new Error("updatedAt field is not updatable");
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Salary_Slips");
  },
};
