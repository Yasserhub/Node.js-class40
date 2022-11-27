import express, { response } from "express";
import { requestData } from "../api/requestData.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> hello from backend to frontend!</h1>");
});

app.post("/weather", (req, res) => {
  const cityName = req.body.cityName;
  try {
    const cities = requestData(cityName);
    cities.then((data) => {
      if (data) {
        console.log(data);
        const name = data.name;
        const temp = data.main.temp;
        res.send(`City Name: ${name} --- Temperature:${temp}`);
      } else {
        res
          .status(404)
          .send({ mes: `There is No city with the a name of :${cityName}` });
      }
    });
  } catch (err) {
    res.status(501).json({ mes: `Not implemented ${err}` });
  }
});

export default app;
