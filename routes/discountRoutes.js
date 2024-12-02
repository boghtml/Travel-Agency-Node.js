// routes/discountRoutes.js

const express = require('express');
const router = express.Router();
const discountController = require('../controllers/discountController');

router.post('/', discountController.create);
router.get('/', discountController.getAll);
router.get('/:id', discountController.getById);
router.put('/:id', discountController.update);
router.delete('/:id', discountController.delete);

module.exports = router;
