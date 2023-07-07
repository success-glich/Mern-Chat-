const express = require("express");
const dotenv = require("dotenv");
const chats = require("./data/data");
dotenv.config({});

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "API is Running Successfully",
  });
});

app.get("/api/chat", (req, res) => {
  res.status(200).json({
    data: chats,
  });
});
app.get("/api/chat/:id", (req, res) => {
  const { id } = req.params;
  const singleChat = chats.find((c) => c._id === id);

  res.status(200).json({ data: singleChat });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Started on Port ${PORT}`);
});
