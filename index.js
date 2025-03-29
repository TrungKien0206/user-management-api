const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the User Management API!");
});

// Kết nối MongoDB Compass (Localhost)
mongoose
  .connect(
    "mongodb+srv://userDB:Klelyhi0204062005@userdb.i6dgz15.mongodb.net/?retryWrites=true&w=majority&appName=userDB"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const PORT = 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
