import React from "react";
import "./Forecast.css";

export default function Forecast(props) {
  return (
    <div className="Forecast">
      <div className="weather-forecast-date">{props.day}</div>
      <img src={props.icon} alt="" />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temperature-max">
          {props.tempMax}°/
        </span>
        <span className="weather-forecast-temperature-min">
          {props.tempMin}°
        </span>
      </div>
    </div>
  );
}
