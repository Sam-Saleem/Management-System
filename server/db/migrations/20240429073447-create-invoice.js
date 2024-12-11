"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(
      "Invoices",
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
        projectId: {
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "Projects", //table name
            key: "id",
          },
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        dueDate: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        description: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        status: {
          type: Sequelize.ENUM,
          values: ["Pending", "Recieved", "Cancelled"],
          allowNull: false,
        },
        taxAmount: {
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
      }
      // {
      //   // Define a unique constraint for the combination of projectId and dueDate
      //   indexes: [
      //     {
      //       unique: true,
      //       fields: ["projectId", "dueDate"],
      //     },
      //   ],
      // }
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Invoices");
  },
};