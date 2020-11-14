//const express = require("express");

import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => {
  console.log(req);
  res.send("homehome");
};

const handleProfile = (req, res) => res.send("profile");

app.listen(PORT, handleListening);

app.get("/", handleHome);
app.get("/profile", handleProfile);
