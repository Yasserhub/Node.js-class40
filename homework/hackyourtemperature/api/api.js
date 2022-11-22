import { key } from "../sources/key.js";

export async function requestData(url) {
  try {
    const response = await fetch(url);
    if (response.ok) {
      return response.json();
    } else {
      //throw new Error(`HTTP error, status= ${response.status}`);
      const err = false;
      return err;
    }
  } catch (error) {
    console.error(error);
  }
}
export async function main(cityName) {
  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}`;
    const responseOfRequest = await requestData(url);

    return responseOfRequest;
  } catch (error) {
    const errorInformation = `${error.message} - code: ${error.code} - status: ${error.status}`;

    console.error(errorInformation);
  }
}
