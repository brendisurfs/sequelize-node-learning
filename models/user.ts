import { DataTypes, ModelCtor } from "sequelize";
import connection from "../util/database";

type UType = {
  name: string;
  bio: string;
};

// create our User table
const User = connection.define(
  "User",
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    first: {
      type: DataTypes.STRING,
    },
    last: {
      type: DataTypes.STRING,
    },
    full_name: DataTypes.STRING,
    bio: DataTypes.TEXT,
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
