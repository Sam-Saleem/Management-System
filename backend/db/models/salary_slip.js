"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Salary_Slip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Salary_Slip.belongsTo(models.User, {
        foreignKey: "employeeId",
        sourceKey: "id",
      });
    }
  }
  Salary_Slip.init(
    {
      employeeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
      },
      overtime: {
        type: DataTypes.INTEGER,
      },
      date: {
        type: DataTypes.DATE,
      },
      totalPay: {
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "Salary_Slip",

      // Define a unique constraint for the combination of EmployeeId and Date
      indexes: [
        {
          unique: true,
          fields: ["employeeId", "date"],
        },
      ],
    }
  );
  return Salary_Slip;
};
