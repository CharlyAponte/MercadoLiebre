const express = require("express");
const path = require("path");
const app = express();
const publicPath = path.resolve(__dirname, "./public");

app.use(express.static(publicPath));

app.listen(3000, () => console.log("Servidor Funcionando"));

app.get("/Inicio", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/ingresa", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/login.html"));
});
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/creatucuenta", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});
