import weatherService from "../services/weather"

import { isEmpty } from "../utilities/isEmpty"
import { useState, useEffect } from "react"

const DisplayCountryInfo = ({ country }) => {
  const [ weatherData, setWeatherData ] = useState({})

  const countryName = country.name.official;
  const countryCapital = country.capital;
  const countryArea = country.area;
  const countryLanguages = country.languages;
  const countryFlag = country.flags.png;
  const latitude = country.latlng[0];
  const longitude = country.latlng[1];

  useEffect(() => {
    weatherService
      .getWeather(latitude, longitude)
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.log(`Error obtaining weather for ${countryName}`)
      })

  }, [ countryName, latitude, longitude ]) 

  const hasWeatherData = isEmpty(weatherData);
  const temp = !hasWeatherData ? `${weatherData.main.temp} F` : "N/A";
  const wind = !hasWeatherData ? `${weatherData.wind.speed} mph` : "N/A";
  const icon = !hasWeatherData ? `${weatherData.weather[0].icon}` : "N/A";

  return (
    <>
      <h1>{countryName}</h1>
      <p>Country's Capital: {countryCapital}</p>
      <p>Area: {countryArea}</p>
      <h2>Languages</h2>
      <ul>
        {
          Object.values(countryLanguages)
            .map((language) => {
              return (<li key={language}>{language}</li>)
            })
        }
      </ul>
      <img src={countryFlag} alt={`${countryName}'s flag`}/>
      <h2>Weather in {countryName}</h2>
      <p>Temperature {temp}</p>
      <img src={icon != "N/A" ? `https://openweathermap.org/payload/api/media/file/${icon}.png` : "N/A"} alt="weather icon"/>
      <p>Wind {wind}</p>
    </>
  )
};

export default DisplayCountryInfo;
