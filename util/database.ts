import { Sequelize } from "sequelize";

const connection = new Sequelize("table", "user", "pass", {
  dialect: "sqlite",
  host: "localhost",
  storage: "db.sqlite",
});

export default connection;
