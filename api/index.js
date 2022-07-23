import express from "express";

const app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  res.send({ message: "ok" });
});

app.listen(port, () => {
  console.log(`servidor rodando na porta: ${port}`);
});

export default app;
