import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

export default function SearchCity(props) {
  const [city, setCity] = useState(props.city);
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function showWeather(response) {
    setCity({
      cityName: response.data.name,
    });
    setLoaded(true);
    setWeather({
      currentTemp: response.data.main.temp,
      currentDescription: response.data.weather[0].description,
      currentHumidity: response.data.main.humidity,
      currentWind: response.data.wind.speed,
      currentFeelslike: response.data.main.feels_like,
      currentIcon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=83d4ec1e65679a00b9602279433dcdb9&units=metric`;
    axios.get(url).then(showWeather);
  }

  function handleUpdate(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  let form = (
    <form className="mb-3" onSubmit={handleSubmit}>
      <div className="row">
        <div className="col">
          <input
            className="form-control"
            type="search"
            placeholder="Enter a city..."
            autoFocus={true}
            onChange={handleUpdate}
          />
        </div>
        <div className="col">
          <input className="btn btn-success" type="submit" value="Search" />
        </div>
      </div>
    </form>
  );

  if (loaded) {
    return (
      <div className="Search">
        <div className="SearchForm">{form}</div>
        <div className="Overview">
          <h1>{city.cityName}</h1>
          <ul>
            <li>
              Last updated:
              <span>10:00</span>
            </li>
            <li>{weather.currentDescription}</li>
          </ul>
        </div>
        <div className="currentWeather">
          <div className="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weather.currentIcon}
                  alt="Weather Icon"
                  className="float-start"
                />
                <div className="float-start">
                  <strong>{Math.round(weather.currentTemp)}</strong>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul>
                <li>
                  Feels like:
                  <span> {Math.round(weather.currentFeelslike)}</span>°C
                </li>
                <li>
                  Humidity:
                  <span> {weather.currentHumidity}</span>%
                </li>
                <li>
                  Wind:
                  <span> {Math.round(weather.currentWind * 3.6)} </span>
                  km/h
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
