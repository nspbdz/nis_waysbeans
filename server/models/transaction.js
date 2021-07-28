'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { 
      transaction.belongsTo(models.user, { 
        as: "user",
        foreignKey: {
          name: "user_id",
        },
      }); 
      transaction.belongsTo(models.House, { 
        as: "house",
        foreignKey: {
          name: "houseId",
        },
      }); 
     

      // define association here
    }
  };
  transaction.init({
    // id: DataTypes.INTEGER,
    totaltime: DataTypes.STRING,
    checkin: DataTypes.DATE,
    checkout: DataTypes.DATE,
    total: DataTypes.INTEGER,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING,
    user_id: DataTypes.STRING,
    houseId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};