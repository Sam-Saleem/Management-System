"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const process = require("process");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.js")[env];
const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], {
    ...config,
    logging: false,
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config,
    { logging: false }
  );
}

// Function to check if the database exists
const checkDatabaseExists = async () => {
  try {
    await sequelize.query(
      `SELECT 1 FROM pg_database WHERE datname='${config.database}'`
    );
    return true;
  } catch (error) {
    return false;
  }
};

// Function to create the database
const createDatabase = async () => {
  try {
    const postgres = new Sequelize(
      `${config.dialect}://${config.username}:${config.password}@${config.host}:5432`,
      {
        dialect: config.dialect,
      }
    );

    await postgres.query(`CREATE DATABASE "${config.database}";`);
    console.log("Database created successfully.");
  } catch (error) {
    console.log("Error creating database:", error);
    process.exit(1);
  }
};

// Sync the models with the database
const syncModels = async () => {
  try {
    await sequelize.sync({ alter: true, logging: false });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to synchronize the database:", error);
  }
};

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      file.indexOf(".test.js") === -1
    );
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Check if the database exists and sync the models
const connectDB = async () => {
  const databaseExists = await checkDatabaseExists();
  if (!databaseExists) {
    await createDatabase();
  }
  await syncModels();
  await sequelize.authenticate();
};

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;

module.exports = { db, connectDB };
