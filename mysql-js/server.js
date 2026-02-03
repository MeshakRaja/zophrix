const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "@Meshak19",
  database: "zophrix_db"
});

// Test DB connection
db.connect(err => {
  if (err) {
    console.error("MySQL connection failed:", err);
    process.exit(1);
  }
  console.log("Connected to MySQL database");
});

// 🔹 LOGIN API (POST)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Login request:", email, password);

  const sql = "SELECT password FROM users WHERE email = ?";
  db.query(sql, [email], (err, result) => {

    if (err) {
      console.error("SQL ERROR:", err);
      return res.status(500).json({ message: "Database error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }

    if (result[0].password === password) {
      return res.json({ success: true });
    } else {
      return res.status(401).json({ message: "Invalid password" });
    }
  });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});




