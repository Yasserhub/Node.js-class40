import { key } from "../sources/key.js";

export async function requestData(cityName) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      const err = false;
      return err;
    }
  } catch (error) {
    const errorInformation = `${error.message} - code: ${error.code} - status: ${error.status}`;
    console.error(errorInformation);
  }
}
