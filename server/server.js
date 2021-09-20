const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");

const app = express();
const port = 3000;
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.post("/asignaciones", (req, res) => {
  db.saveItem(req.body);
  res.status(200).send("Guardado");
});

app.get("/asignaciones", async (req, res) => {
  res.status(200).json(await db.getItems());
});

app.get("/asignaciones/:id", async (req, res) => {
  res.status(200).json(await db.getItem(req.params.id));
});

app.put("/asignaciones", async (req, res) => {
  res.status(200).json(await db.updateItem(req.body));
});

app.delete("/asignaciones/:id", async (req, res) => {
  res.status(200).json(await db.deleteItem(req.params.id));
});

app.listen(port, () => {
  console.log(`Servidor on http://localhost:${port}`);
});
