// controllers/countryController.js

const { Country } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const country = await Country.create(req.body);
      res.status(201).json(country);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const countries = await Country.findAll();
      res.json(countries);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const country = await Country.findByPk(req.params.id);
      if (country) {
        res.json(country);
      } else {
        res.status(404).json({ error: 'Країну не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Country.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedCountry = await Country.findByPk(req.params.id);
        res.json(updatedCountry);
      } else {
        res.status(404).json({ error: 'Країну не знайдено' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Country.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Країну не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
