//const express = require("express");

import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) => res.send("homehome");

const handleProfile = (req, res) => res.send("profile");

const betweenHome = (req, res, next) => {
  console.log("between");
  next();
};

app.listen(PORT, handleListening);

app.use(betweenHome);

app.get("/", handleHome);
app.get("/profile", handleProfile);
