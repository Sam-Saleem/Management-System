"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Role_Privileges extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Role_Privileges.init(
    {
      tableName: DataTypes.STRING,
      canCreate: DataTypes.ARRAY(DataTypes.INTEGER),
      canRead: DataTypes.ARRAY(DataTypes.INTEGER),
      canUpdate: DataTypes.ARRAY(DataTypes.INTEGER),
      canDelete: DataTypes.ARRAY(DataTypes.INTEGER),
    },
    {
      sequelize,
      modelName: "Role_Privileges",
    }
  );
  return Role_Privileges;
};
