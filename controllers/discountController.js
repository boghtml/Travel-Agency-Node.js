// controllers/discountController.js

const { Discount } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const discount = await Discount.create(req.body);
      res.status(201).json(discount);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const discounts = await Discount.findAll();
      res.json(discounts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const discount = await Discount.findByPk(req.params.id);
      if (discount) {
        res.json(discount);
      } else {
        res.status(404).json({ error: 'Знижку не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Discount.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedDiscount = await Discount.findByPk(req.params.id);
        res.json(updatedDiscount);
      } else {
        res.status(404).json({ error: 'Знижку не знайдено' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Discount.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Знижку не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
