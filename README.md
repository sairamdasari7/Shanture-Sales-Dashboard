# 📊 Shanture Sales Analytics

A full-stack MERN (MongoDB, Express, React, Node.js) application to visualize and manage sales analytics data for Shanture.  
This project provides an **API backend** and a **React frontend** with interactive charts.

---

## 🚀 Features
- Add, view, and manage monthly sales data
- Interactive charts powered by [ECharts](https://echarts.apache.org/)
- Responsive UI (works on desktop & mobile)
- Error handling & validation
- Simple project structure for easy learning

---

## 🛠️ Tech Stack
**Frontend**
- React (CRA)
- ECharts for data visualization
- Fetch API

**Backend**
- Node.js / Express
- MongoDB + Mongoose
- CORS + dotenv

---

## 📂 Project Structure
```
shanture_sales_analytics/
│
├── backend/              # Express + MongoDB API
│   ├── models/           # Mongoose schemas
│   ├── routes/           # API routes
│   ├── server.js         # Main server file
│   └── seed.js           # Script to seed DB
│
├── frontend/             # React application
│   ├── public/           # index.html + static files
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── App.js        # Main app
│   │   └── index.js      # Entry point
│
└── README.md             # This file
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone <your-repo-url>
cd shanture_sales_analytics
```

### 2️⃣ Backend Setup
```bash
cd backend
npm install
```

- Create a `.env` file inside `backend/`:
```
MONGO_URI=mongodb://127.0.0.1:27017/shanture
PORT=5000
```

- Seed database with dummy sales data:
```bash
node seed.js
```

- Start backend server:
```bash
npm start
```
Your API will run on 👉 `http://localhost:5000/api/sales`

---

### 3️⃣ Frontend Setup
```bash
cd frontend
npm install
```

- Create a `.env` file inside `frontend/`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

- Start frontend dev server:
```bash
npm start
```

The React app will run on 👉 `http://localhost:3000`

---

## 📊 Example API

### ➡️ GET all sales
```http
GET http://localhost:5000/api/sales
```

### ➡️ POST a new sale
```http
POST http://localhost:5000/api/sales
Content-Type: application/json

{
  "month": "September",
  "total": 2000
}
```

---

## 💡 Notes
- Make sure **MongoDB** is running locally before starting backend.
- The frontend expects backend at `http://localhost:5000` (can be changed in `.env`).
- If ECharts fails to load, reinstall:  
```bash
npm install echarts echarts-for-react
```

---

## 📌 Future Improvements
- User authentication (login system)
- Export reports as PDF/Excel
- More advanced filters & dashboards

---

👨‍💻 Developed as part of Shanture Sales Analytics project.
