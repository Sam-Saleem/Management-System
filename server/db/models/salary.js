"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Salary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Salary.belongsTo(models.User, {
        foreignKey: "employeeId",
        sourceKey: "id",
      });
    }
  }
  Salary.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      effectiveDate: {
        type: DataTypes.DATE,
      },
      incrementDate: {
        type: DataTypes.DATE,
      },
      incrementPercentage: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Salary",
    }
  );
  return Salary;
};
