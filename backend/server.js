const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Simple Test Route
app.get('/', (req, res) => {
  res.send('E-commerce API is running...');
});

// Products Route
// Products Route
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      description: 'Premium noise-cancelling headphones with 30hr battery',
      category: 'Electronics',
      countInStock: 15,
      rating: 4.5
    },
    {
      id: 2,
      name: 'Smart Watch Pro',
      price: 249.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      description: 'Advanced smartwatch with health monitoring',
      category: 'Electronics',
      countInStock: 8,
      rating: 4.7
    },
    {
      id: 3,
      name: 'Laptop Backpack',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop',
      description: 'Water-resistant laptop backpack with USB charging port',
      category: 'Fashion',
      countInStock: 25,
      rating: 4.3
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      description: 'Programmable coffee maker with thermal carafe',
      category: 'Home',
      countInStock: 12,
      rating: 4.6
    },
    {
      id: 5,
      name: 'Fitness Tracker',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1576243345690-4e4b79b63288?w=300&h=300&fit=crop',
      description: 'Waterproof fitness tracker with heart rate monitor',
      category: 'Electronics',
      countInStock: 20,
      rating: 4.4
    },
    {
      id: 6,
      name: 'LED Desk Lamp',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop',
      description: 'Adjustable LED lamp with touch controls',
      category: 'Home',
      countInStock: 18,
      rating: 4.2
    }
  ];
  res.json(products);
});

// Place Order Route
app.post('/api/orders', (req, res) => {
  const order = {
    ...req.body,
    id: Date.now(),
    status: 'Processing',
    date: new Date()
  };
  res.json({ success: true, order });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});