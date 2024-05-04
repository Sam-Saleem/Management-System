"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Department.hasMany(models.User, {
        foreignKey: "departmentId",
        as: "Users",
      });
      Department.belongsTo(models.User, {
        foreignKey: "departmentHead",
        as: "User",
      });
    }
  }
  Department.init(
    {
      departmentHead: DataTypes.INTEGER,
      departmentName: DataTypes.STRING,
      employeeCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Department",
    }
  );
  return Department;
};
