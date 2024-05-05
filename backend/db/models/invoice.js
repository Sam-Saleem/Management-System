"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.Project, {
        foreignKey: "projectId",
        sourceKey: "id",
      });
    }
  }
  Invoice.init(
    {
      projectId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dueDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["Pending", "Recieved", "Cancelled"],
        allowNull: false,
      },
      taxAmount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Invoice",

      // Define a unique constraint for the combination of projectId and dueDate
      indexes: [
        {
          unique: true,
          fields: ["projectId", "dueDate"],
        },
      ],
    }
  );
  return Invoice;
};
