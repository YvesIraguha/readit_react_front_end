const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "dist")));

app.get("/ping", (req, res) => res.send("pong"));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "dist", "index.html"))
);

app.listen(port);
