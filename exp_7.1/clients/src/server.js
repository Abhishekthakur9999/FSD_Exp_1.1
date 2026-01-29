// server.js
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Enable CORS (so React frontend can access it)
app.use(cors());

// Sample product data
const products = [
  { id: 1, name: "Laptop", price: 65000 },
  { id: 2, name: "Headphones", price: 2500 },
  { id: 3, name: "Keyboard", price: 1500 },
  { id: 4, name: "Smartphone", price: 48000 },
];

// Define a simple route
app.get('/', (req, res) => {
  res.send('Welcome to the Products API 🚀');
});

// Products endpoint
app.get('/products', (req, res) => {
  res.json(products);
});

// Start the server
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
