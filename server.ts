import { Sequelize } from "sequelize";

// utils
import connection from "./util/database";

// models
import User from "./models/user";

// sync will create through our models.
connection
  .sync()
  .then((res) => {
    console.log("connected to the data!");
  })
  .then(() => {
    User.create({
      name: "Brendan",
      bio: "man I wish this worked",
    });
  })
  .catch((err) => {
    console.log(err);
  });
