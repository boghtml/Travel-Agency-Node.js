// controllers/tourController.js

const db = require('../models');

exports.createTour = async (req, res) => {
  try {
    const tour = await db.Tour.create(req.body);
    res.status(201).json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTours = async (req, res) => {
  try {
    const tours = await db.Tour.findAll();
    res.status(200).json(tours);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTourById = async (req, res) => {
  try {
    const tour = await db.Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateTour = async (req, res) => {
  try {
    const tour = await db.Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    await tour.update(req.body);
    res.status(200).json(tour);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteTour = async (req, res) => {
  try {
    const tour = await db.Tour.findByPk(req.params.id);
    if (!tour) {
      return res.status(404).json({ error: 'Tour not found' });
    }
    await tour.destroy();
    res.status(204).json({ message: 'Tour deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
