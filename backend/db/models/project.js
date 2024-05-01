"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Project.hasOne(models.Invoice, {
        foreignKey: "projectId",
        as: "Project",
      });
      Project.hasMany(models.Project_Progress, {
        foreignKey: "projectId",
        as: "Project_Progress",
      });
      Project.belongsToMany(models.User, {
        through: "User_Project",
        // foreignKey: "resourcesAllocated",
        // sourceKey: "id",
      });
    }
  }
  Project.init(
    {
      resourcesAllocated: DataTypes.ARRAY(DataTypes.INTEGER),
      bdId: DataTypes.INTEGER,
      teamLeadId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      startDate: DataTypes.DATE,
      endDate: DataTypes.DATE,
      status: DataTypes.ENUM(
        "Pending",
        "In-progress",
        "Completed",
        "Cancelled"
      ),
      clientName: DataTypes.STRING,
      platform: DataTypes.ENUM("1", "2"),
      clientRegion: DataTypes.STRING,
      hourlyFlag: DataTypes.BOOLEAN,
      fixedFlag: DataTypes.BOOLEAN,
      fixedAmount: DataTypes.INTEGER,
      hourlyRate: DataTypes.INTEGER,
      b2bFlag: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Project",
    }
  );
  return Project;
};
