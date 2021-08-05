import { DataTypes, ModelCtor } from "sequelize";
import connection from "../util/database";

type UType = {
  name: string;
  bio: string;
};

// create our User table
const User = connection.define("User", {
  uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    primaryKey: true,
  },
  bio: {
    type: DataTypes.TEXT,
  },
});
// export out User
export default User;
