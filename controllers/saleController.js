// controllers/saleController.js

const { Sale, Customer, Tour, Hotel, Discount } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const {
        customer_id,
        tour_id,
        hotel_id,
        quantity,
        discount_id,
        departure_date,
      } = req.body;

      if (!customer_id || !tour_id || !hotel_id || !quantity || !departure_date) {
        return res.status(400).json({ error: 'Необхідні дані відсутні' });
      }

      const tour = await Tour.findByPk(tour_id);
      if (!tour) {
        return res.status(404).json({ error: 'Тур не знайдено' });
      }
      
      const basePrice = parseFloat(tour.price_per_week) * (tour.duration / 7) * quantity;

      let discountPercent = 0;

      if (discount_id) {
        const discount = await Discount.findByPk(discount_id);
        if (discount) {
          discountPercent = parseFloat(discount.discount_percent);
        } else {
          return res.status(404).json({ error: 'Знижку не знайдено' });
        }
      }

      const totalPrice = basePrice - (basePrice * (discountPercent / 100));

      const sale = await Sale.create({
        customer_id,
        tour_id,
        hotel_id,
        quantity,
        discount_id: discount_id || null,
        departure_date,
        total_price: totalPrice.toFixed(2),
      });

      res.status(201).json(sale);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const sales = await Sale.findAll({
        include: [Customer, Tour, Hotel, Discount],
      });
      res.json(sales);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const sale = await Sale.findByPk(req.params.id, {
        include: [Customer, Tour, Hotel, Discount],
      });
      if (sale) {
        res.json(sale);
      } else {
        res.status(404).json({ error: 'Продаж не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    
    res.status(400).json({ error: 'Оновлення продажу не підтримується' });
  },

  async delete(req, res) {
    try {
      const deleted = await Sale.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Продаж не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
