import express from "express";

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1> hello from backend to frontend!</h1>");
});

app.use(express.json());

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  res.json(cityName);
});

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));
