// routes/countryRoutes.js

const express = require('express');
const router = express.Router();
const countryController = require('../controllers/countryController');

router.post('/', countryController.create);
router.get('/', countryController.getAll);
router.get('/:id', countryController.getById);
router.put('/:id', countryController.update);
router.delete('/:id', countryController.delete);

module.exports = router;
