const express = require('express');
const productRoutes = require('./routes/productRoutes');

const app = express();

// Middleware to parse incoming JSON requests
app.use(express.json());

// Load routes
app.use('/api/products', productRoutes);

// Serve static files from the frontend directory
app.use(express.static('frontend'));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
