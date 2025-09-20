const mongoose = require('mongoose');

const SaleSchema = new mongoose.Schema({
  product: String,
  category: String,
  amount: Number,
  date: Date
});

module.exports = mongoose.model('Sale', SaleSchema);