const express = require("express");

const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json({ limit: "200mb" }));
app.use(express.urlencoded({ extended: false }));

module.exports = app;
