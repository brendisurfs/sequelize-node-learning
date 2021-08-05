import { Sequelize } from "sequelize";
import express from "express";

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
  .sync({ force: true })
  .then((res) => {
    console.log("connected to the data!");
  })
  .then(() => {
    User.create({
      first: "brendi",
      last: "prendo",
      full_name: "brendo prendo",
      bio: "new bio here",
    });
  })
  .catch((err) => {
    console.log(err);
  });

// application
app.listen(PORT, () => console.log(`transPORT:${PORT} is away`));
