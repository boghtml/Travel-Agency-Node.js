'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discount extends Model {
    static associate(models) {
      
      Discount.hasMany(models.Sale, { foreignKey: 'discount_id' });
    }
  }
  Discount.init({
    description: DataTypes.STRING,
    discount_percent: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Discount',
  });
  return Discount;
};
