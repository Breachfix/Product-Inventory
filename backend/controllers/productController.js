const ProductInventory = require('../services/productInventory');

// Instantiate the ProductInventory service (using AVL Tree)
const inventory = new ProductInventory();

// Controller function to add a product
exports.addProduct = (req, res) => {
  const { id, name, category, size, quantity } = req.body;
  try {
    inventory.addProduct(id, name, category, size, quantity);
    res.status(201).json({ message: 'Product added successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to update a product by ID
exports.updateProduct = (req, res) => {
  const { id } = req.params;
  const newDetails = req.body;
  try {
    inventory.updateProduct(parseInt(id), newDetails);
    res.json({ message: 'Product updated successfully!' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Controller function to get a product by ID
exports.getProductById = (req, res) => {
  const { id } = req.params;
  const product = inventory.searchProductById(parseInt(id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
};

// Controller function to get all products
exports.getAllProducts = (req, res) => {
  const products = inventory.getAllProducts();
  res.json(products);
};
