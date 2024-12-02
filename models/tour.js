'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tour extends Model {
    static associate(models) {
      Tour.belongsTo(models.Country, { foreignKey: 'country_id' });
      
      Tour.hasMany(models.Sale, { foreignKey: 'tour_id' });
    }
  }
  Tour.init({
    country_id: DataTypes.INTEGER,
    climate: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    price_per_week: DataTypes.DECIMAL,
    tour_image_url: DataTypes.STRING,
    description: DataTypes.TEXT,
    start_date: DataTypes.DATE,
    end_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Tour',
  });
  return Tour;
};
