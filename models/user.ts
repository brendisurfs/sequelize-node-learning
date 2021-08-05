import { DataTypes } from "sequelize";
import connection from "../util/database";

// create our User table
const User = connection.define("User", {
  name: {
    type: DataTypes.STRING,
  },
  bio: {
    type: DataTypes.TEXT,
  },
});
// export out User
export default User;
