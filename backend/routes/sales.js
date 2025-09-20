const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');

// Get all sales
router.get('/', async (req, res) => {
  const sales = await Sale.find();
  res.json(sales);
});

// Get aggregated sales (monthly totals)
router.get('/aggregated', async (req, res) => {
  const data = await Sale.aggregate([
    {
      $group: {
        _id: { month: { $month: "$date" }, year: { $year: "$date" } },
        total: { $sum: "$amount" }
      }
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } }
  ]);
  res.json(data);
});

module.exports = router;