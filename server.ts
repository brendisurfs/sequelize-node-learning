import express from "express";
import Sequelize from "sequelize";

const PORT = 8001;
const app = express();

// connection with sequelize
// FIRST: initialize a new sequelize object.
// SECOND: pass in the db options. FOurth param is a slot to put optional values.
//
const conn = new Sequelize.Sequelize("db", "user", "pass", {
  host: "localhost",
  dialect: "sqlite",
  storage: "db.sqlite",
});

const User = conn.define("User", {
  user: Sequelize.STRING,
  bio: Sequelize.STRING,
});

conn
  .sync({
    logging: console.log,
  })
  .then(() => {
    console.log("connection with sync successful.");
  })
  .then(() => {
    User.create({
      name: "brendi",
      bio: "sick surf guy man",
    });
  });

// THIRD: authenticate the connection
conn.authenticate().then(() => {
  console.log(`connection to the db was successful.`);
});
app.listen(PORT, () => {
  console.log(`port:${PORT} is away.`);
});
