import { DataTypes, ModelCtor } from "sequelize";
import connection from "../util/database";
import _USERS from "../Users.json";
type UType = {
  name: string;
  bio: string;
};

// create our User table
// match up the data with our _USERS json file.
const User = connection.define(
  "User",
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: true,
      },
    },
  },
  {
    hooks: {
      beforeValidate: () => {
        console.log("before");
      },
      afterValidate: () => {
        console.log("after validate");
      },
      beforeCreate: () => {
        console.log("before create");
      },
      afterCreate: () => {
        console.log("after create");
      },
    },
  }
);
// export out User
export default User;
