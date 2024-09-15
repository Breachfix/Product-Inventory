const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// Add a new product
router.post('/add', productController.addProduct);

// Update a product by ID
router.put('/update/:id', productController.updateProduct);

// Get a product by ID
router.get('/:id', productController.getProductById);

// Get all products
router.get('/', productController.getAllProducts);

module.exports = router;
