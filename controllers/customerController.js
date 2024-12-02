// controllers/customerController.js

const { Customer } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const customer = await Customer.create(req.body);
      res.status(201).json(customer);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const customers = await Customer.findAll();
      res.json(customers);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const customer = await Customer.findByPk(req.params.id);
      if (customer) {
        res.json(customer);
      } else {
        res.status(404).json({ error: 'Клієнта не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Customer.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedCustomer = await Customer.findByPk(req.params.id);
        res.json(updatedCustomer);
      } else {
        res.status(404).json({ error: 'Клієнта не знайдено' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Customer.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Клієнта не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
