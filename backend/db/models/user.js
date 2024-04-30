"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.Salary, { foreignKey: "employeeId", as: "Salary" });
      User.hasMany(models.Attendance, {
        foreignKey: "employeeId",
        as: "Attendances",
      });
      User.hasMany(models.Salary_Slip, {
        foreignKey: "employeeId",
        as: "Salary Slips",
      });
      User.hasMany(models.Project_Progress, {
        foreignKey: "employeeId",
        as: "Project_Progress",
      });

      User.belongsTo(models.Shift, {
        foreignKey: "shiftId",
        sourceKey: "id",
      });
      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        sourceKey: "id",
      });
      User.belongsToMany(models.Project, {
        through: "User_Project",
        // foreignKey: "Resources_allocated",
        // sourceKey: "id",
      });
      User.belongsTo(models.Department, {
        foreignKey: "departmentId",
        sourceKey: "id",
      });
    }
  }
  User.init(
    {
      shiftId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Shifts", //table name
          key: "id",
        },
      },
      roleId: DataTypes.INTEGER,
      departmentId: DataTypes.INTEGER,
      employeeId: DataTypes.STRING,
      name: DataTypes.STRING,
      mobileNo: DataTypes.INTEGER,
      cnic: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      address: DataTypes.STRING,
      jobTitle: DataTypes.STRING,
      hireDate: DataTypes.DATE,
      dob: DataTypes.DATE,
      status: DataTypes.ENUM("Active", "Terminated", "Deceased"),
      leaves: DataTypes.INTEGER,
      availableLeaves: DataTypes.INTEGER,
      commissionFlag: DataTypes.BOOLEAN,
      commissionPercentage: DataTypes.INTEGER,

      // // Privileges:
      // create: DataTypes.ARRAY(DataTypes.INTEGER),
      // read: DataTypes.ARRAY(DataTypes.INTEGER),
      // update: DataTypes.ARRAY(DataTypes.INTEGER),
      // delete: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
