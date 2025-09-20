const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const salesRoutes = require('./routes/sales');

// Load .env only in development
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/sales', salesRoutes);

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("ERROR: MONGO_URI is not defined. Set it in .env (local) or Render secrets (production).");
  process.exit(1); // stop the server if MONGO_URI is missing
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
.catch(err => console.error("MongoDB connection error:", err));
