import { Sequelize } from "sequelize";
import express from "express";
import _USERS from "./Users.json";
// utils
import connection from "./util/database";

// models
import User from "./models/user";

const PORT = 8000;
const app = express();

// routes

// app.get("/", (_, res) => {
//   User.create({
//     name: "brendi",
//     bio: "nice",
//   })
//     .then((user) => {
//       res.json(user);
//     })
//     .catch((err) => {
//       res.status(404).send(err);
//     });
// });
//
// sync will create through our models.
connection
  .sync({ force: false })
  .then((res) => {
    console.log("connected to the data!");
  })
  .then(() => {
    User.bulkCreate(_USERS);
  })
  .then((users) => {
    console.log("success adding users");
  })
  .catch((err) => {
    console.log(err);
  });

// application
app.listen(PORT, () => console.log(`transPORT:${PORT} is away`));
