const express = require("express");
const app = express();

const PORT = 4000;

function handleListening() {
  console.log(`Listening on : http://localhost:${PORT}`);
}

function handleHome(req, res) {
  console.log(req);
  res.send("homehome");
}

function handleProfile(req, res) {
  res.send("profile");
}

app.listen(PORT, handleListening);

app.get("/", handleHome);
app.get("/profile", handleProfile);
