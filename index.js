const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

// MongoDB connection
const dbURI = "mongodb+srv://asim:asim@cluster0.qbdy55b.mongodb.net/"; // Replace with your MongoDB connection string
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// Define a simple schema and model
const Schema = mongoose.Schema;
const exampleSchema = new Schema({
  name: String,
  value: Number,
});
const Example = mongoose.model("Example", exampleSchema);

// GET API endpoint
app.get("/", async (req, res) => {
  try {
    res.json({ message: "hey this Asim Nodejs backend" });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
