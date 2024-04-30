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
      employeeId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      effectiveDate: DataTypes.DATE,
      incrementDate: DataTypes.DATE,
      incrementPercentage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Salary",
    }
  );
  return Salary;
};
