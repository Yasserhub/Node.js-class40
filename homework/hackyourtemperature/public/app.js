import express, { response } from "express";
import { main } from "../api/api.js";
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1> hello from backend to frontend!</h1>");
});

//export const cityName = "Aden";
app.post("/weather", (req, res) => {
 const cityName = req.body.cityName;

  try {
    const cities = main(cityName);
    cities.then((data) => {
      if (data) {
        console.log(data);
        const name = data.name;
        const temp = data.main.temp;
        res.json(`City Name: ${name} --- Temperature:${temp}`);
      } else {
        //const msg = `There is No city with the a name of :${cityName}`;
        res
          .status(400)
          .json({ mes: `There is No city with the a name of :${cityName}` });
      }
    });
  } catch (err) {
    res.status(400).json({ mes: `There is a problem of ${err}` });
  }
});

export default app;
