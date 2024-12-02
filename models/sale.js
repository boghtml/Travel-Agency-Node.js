// models/sale.js

'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sale extends Model {
    static associate(models) {

      Sale.belongsTo(models.Customer, { foreignKey: 'customer_id' });
      Sale.belongsTo(models.Tour, { foreignKey: 'tour_id' });
      Sale.belongsTo(models.Hotel, { foreignKey: 'hotel_id' });
      Sale.belongsTo(models.Discount, { foreignKey: 'discount_id', allowNull: true });
    }
  }
  Sale.init({
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tour_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    hotel_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
      },
    },
    discount_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    departure_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Sale',
  });
  return Sale;
};
