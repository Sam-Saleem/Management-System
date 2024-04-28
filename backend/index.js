const express = require("express");
const cors = require("cors");
const { sequelize, Sequelize } = require("./db/models");

const app = express();
const port = process.env.PORT;

require("dotenv").config();
//using cors
app.use(cors());

//if you want to use the body of request use a middle-ware:
app.use(express.json());
//and set the  header content-type as json

// Available Routes:
// const user = require("./routes/user");
// app.use("/api/user", user);

app.listen(port, async () => {
  console.log(
    `Management System backend(server) listening at http://localhost:${port}`
  );
  try {
    // const postgres = new Sequelize("postgres://postgres:12345@localhost:5432", {
    //   dialect: "postgres",
    // });

    // const databaseExists = await postgres.query(
    //   `SELECT 1 FROM pg_database WHERE datname='Management System1'`
    // );
    // if (!databaseExists[0].length > 0) {
    //   // Create database
    //   await postgres.query(`CREATE DATABASE "Management System1";`);
    // }
    await sequelize.authenticate();
    console.log("Database connected!");

    // console.log("============", databaseExists);
  } catch (error) {
    console.error("Error: ", error);
  }
});
