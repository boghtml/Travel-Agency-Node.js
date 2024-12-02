'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Hotel extends Model {
    static associate(models) {

      Hotel.belongsTo(models.Country, { foreignKey: 'country_id' });

      Hotel.hasMany(models.Sale, { foreignKey: 'hotel_id' });
    }
  }
  Hotel.init({
    country_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    class: DataTypes.STRING,
    hotel_image_url: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Hotel',
  });
  return Hotel;
};
