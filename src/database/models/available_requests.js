'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class available_requests extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  available_requests.init({
    requester: DataTypes.STRING,
    requestType: DataTypes.INTEGER,
    requestedOn: DataTypes.DATE,
    reason: DataTypes.STRING,
    status: DataTypes.STRING,
    action: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AvailableRequest',
  });
  return available_requests;
};