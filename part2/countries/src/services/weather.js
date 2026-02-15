import axios from "axios";
const baseUrl = "https://api.openweathermap.org/data/2.5";
const api_key = import.meta.env.VITE_WEATHER_KEY

const getWeather = (lat, lon) => {
  const request = axios.get(`${baseUrl}/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=imperial`)
  return request.then((response) => response.data);
}

export default {
  getWeather,
};
