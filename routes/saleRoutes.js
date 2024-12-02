// routes/saleRoutes.js

const express = require('express');
const router = express.Router();
const saleController = require('../controllers/saleController');

router.post('/', saleController.create);
router.get('/', saleController.getAll);
router.get('/:id', saleController.getById);
router.put('/:id', saleController.update);
router.delete('/:id', saleController.delete);

module.exports = router;
