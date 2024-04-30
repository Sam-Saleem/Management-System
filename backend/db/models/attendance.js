"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendance.belongsTo(models.User, {
        foreignKey: "employeeId",
        sourceKey: "id",
      });
    }
  }
  Attendance.init(
    {
      employeeId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      inTime: DataTypes.TIME,
      outTime: DataTypes.TIME,
      publicHoliday: DataTypes.BOOLEAN,
      tourHoliday: DataTypes.BOOLEAN,
      weekend: DataTypes.BOOLEAN,
      leave: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Attendance",

      // Define a unique constraint for the combination of EmployeeId and Date
      indexes: [
        {
          unique: true,
          fields: ["employeeId", "date"],
        },
      ],
    }
  );
  return Attendance;
};
