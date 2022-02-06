import React from "react";
import "./App.css";
import Search from "./Search";

import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="AppWrapper">
      <div className="App">
        <div className="Search">
          <Search />
        </div>

        <div className="weather-forecast">
          <div className="row">
            <div className="col-2">
              <Forecast
                day="Sun"
                tempMax={5}
                tempMin={3}
                icon={"https://openweathermap.org/img/wn/04d@2x.png"}
              />
            </div>
            <div className="col-2">
              <Forecast
                day="Mon"
                tempMax={6}
                tempMin={4}
                icon={"https://openweathermap.org/img/wn/04d@2x.png"}
              />
            </div>
            <div className="col-2">
              <Forecast
                day="Tue"
                tempMax={10}
                tempMin={6}
                icon={"https://openweathermap.org/img/wn/01d@2x.png"}
              />
            </div>
            <div className="col-2">
              <Forecast
                day="Wed"
                tempMax={9}
                tempMin={8}
                icon={"https://openweathermap.org/img/wn/01d@2x.png"}
              />
            </div>
            <div className="col-2">
              <Forecast
                day="Thu"
                tempMax={7}
                tempMin={5}
                icon={"https://openweathermap.org/img/wn/10d@2x.png"}
              />
            </div>
            <div className="col-2">
              <Forecast
                day="Fri"
                tempMax={5}
                tempMin={3}
                icon={"https://openweathermap.org/img/wn/04d@2x.png"}
              />
            </div>
          </div>
        </div>
      </div>
      <small>
        This{" "}
        <a
          href="https://github.com/breezeHH/react-weather"
          target="_blank"
          rel="noreferrer"
        >
          open-source project{" "}
        </a>
        was coded by
        <a
          href="https://www.linkedin.com/in/kathrin-hesse-0b6215129/"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Kathrin
        </a>
        .
      </small>
    </div>
  );
}
