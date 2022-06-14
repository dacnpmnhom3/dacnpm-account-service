import { DataTypes, Model } from "sequelize";
import sequelize from "../../../../config/MySQLConfig";

class Admin extends Model {}
Admin.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrementIdentity: true,
      autoIncrement: true,
      primaryKey: true,
    },
    fullName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "admin",
  },
);

export default Admin;
