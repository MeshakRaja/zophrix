// const mysql = require("mysql2");
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",          
//   password: "@Meshak19",  
//   database: "zophrix"   
// });

// db.connect((err) => {
//   if (err) {
//     console.error("MySQL connection failed:", err);
//   } else {
//     console.log("MySQL Connected");
//   }
// });

// module.exports = db;

//backend

document.addEventListener("DOMContentLoaded", function () {

  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const button = document.getElementById("btn");

  button.addEventListener("click", function () {
    const email = emailInput.value;
    const password = passwordInput.value;
    console.log("Email:", email);
    console.log("Password:", password);
  });
});
