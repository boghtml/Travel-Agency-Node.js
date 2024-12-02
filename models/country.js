'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Country extends Model {
    static associate(models) {
      
      Country.hasMany(models.Tour, { foreignKey: 'country_id' });
      Country.hasMany(models.Hotel, { foreignKey: 'country_id' });
    }
  }
  Country.init({
    name: DataTypes.STRING,
    country_image_url: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Country',
  });
  return Country;
};
