const mongoose = require('mongoose');
const faker = require('faker');
const dotenv = require('dotenv');
const Sale = require('./models/Sale');

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("Connected to MongoDB, seeding data...");

  await Sale.deleteMany({});

  const sales = [];
  for (let i = 0; i < 1200; i++) {
    sales.push({
      product: faker.commerce.productName(),
      category: faker.commerce.department(),
      amount: faker.commerce.price(100, 1000),
      date: faker.date.between("2022-01-01", "2024-09-01")
    });
  }

  await Sale.insertMany(sales);
  console.log("Database seeded with 1200 sales.");
  process.exit();
});