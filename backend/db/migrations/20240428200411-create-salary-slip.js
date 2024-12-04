"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Salary_Slips",
      {
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
        },
        overtime: {
          type: Sequelize.INTEGER,
        },
        date: {
          type: Sequelize.DATE,
        },
        totalPay: {
          type: Sequelize.INTEGER,
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
      },
      {
        // Define a unique constraint for the combination of EmployeeId and Date
        indexes: [
          {
            unique: true,
            fields: ["employeeId", "date"],
          },
        ],
      }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Salary_Slips");
  },
};
