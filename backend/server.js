const express = require("express");
const app = express();
const chats = require("./data/data");
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(PORT));

app.get("/", (req, res) => {
  res.send("API is Runnin");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

// app.get("/chats/:id", (req, res) => {
//   console.log(req);
// });

app.get("/api/chats/:id", (req, res) => {
  const SingleChat = chats.find((c) => c._id === req.params.id);
  res.send(SingleChat);
});
