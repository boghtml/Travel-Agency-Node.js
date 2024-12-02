// controllers/hotelController.js

const { Hotel, Country } = require('../models');

module.exports = {
  async create(req, res) {
    try {
      const hotel = await Hotel.create(req.body);
      res.status(201).json(hotel);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const hotels = await Hotel.findAll({
        include: [Country],
      });
      res.json(hotels);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const hotel = await Hotel.findByPk(req.params.id, {
        include: [Country],
      });
      if (hotel) {
        res.json(hotel);
      } else {
        res.status(404).json({ error: 'Готель не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const [updated] = await Hotel.update(req.body, {
        where: { id: req.params.id },
      });
      if (updated) {
        const updatedHotel = await Hotel.findByPk(req.params.id);
        res.json(updatedHotel);
      } else {
        res.status(404).json({ error: 'Готель не знайдено' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Hotel.destroy({
        where: { id: req.params.id },
      });
      if (deleted) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: 'Готель не знайдено' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
