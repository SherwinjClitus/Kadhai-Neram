

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const email = "sherwin@gmail.com";
const password = "Sherwin@123";

app.post("/login", function (req, res) {
  const userEmail = req.body.email;
  const userPassword = req.body.password;

  // Check for missing or empty credentials
  if (
    typeof userEmail !== "string" ||
    typeof userPassword !== "string" ||
    !userEmail.trim() ||
    !userPassword.trim()
  ) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  // Validate email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(userEmail.trim())) {
    return res.status(400).json({
      success: false,
      message: "Please enter a valid email address",
    });
  }

  // Check login credentials
  if (
    userEmail.trim() === email &&
    userPassword === password
  ) {
    return res.status(200).json({
      success: true,
      message: "Login successful",
    });
  }

  // Invalid credentials
  return res.status(401).json({
    success: false,
    message: "Invalid email or password",
  });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server started on port ${PORT}`);
});

