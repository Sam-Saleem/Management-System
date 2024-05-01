"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project_Progress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project_Progress.belongsTo(models.User, {
        foreignKey: "employeeId",
        sourceKey: "id",
      });
      Project_Progress.belongsTo(models.Project, {
        foreignKey: "projectId",
        sourceKey: "id",
      });
    }
  }
  Project_Progress.init(
    {
      employeeId: DataTypes.INTEGER,
      projectId: DataTypes.INTEGER,
      date: DataTypes.DATE,
      hoursWorked: DataTypes.INTEGER,
      totalAmount: DataTypes.INTEGER, // hours_worked * hourly_rate
      startTime: DataTypes.TIME,
      endTime: DataTypes.TIME,
    },
    {
      sequelize,
      modelName: "Project_Progress",
      // Define a unique constraint for the combination of EmployeeId, ProjectId and Date
      indexes: [
        {
          unique: true,
          fields: ["employeeId", "projectId", "date"],
        },
      ],
    }
  );
  return Project_Progress;
};
