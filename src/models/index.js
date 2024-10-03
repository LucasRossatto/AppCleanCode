const fs = require("fs"); // File System
const path = require("path"); // Caminho
const sequelize = require("../config/database");

const db = [];

fs.readdirSync(__dirname)
  .filter((file = file !== "index.js")) // User.js
  .forEach((file) => {
    // Capturando cada arquivo individualmente
    const model = require(path.join(__dirname, file));
    // db [ user ] = Modelo User;
    db[model.name] = model;
  });

sequelize.sync();

module.exports = { sequelize, ...db };
