import React, { useState } from "react";
import Conditions from "../Conditions/Conditions.js";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  const uriEncodedCity = encodeURIComponent(city);
  let [responseObj, setResponseObj] = useState({});

  function getForecast(e) {
    e.preventDefault();
    fetch(
      `https://community-open-weather-map.p.rapidapi.com/weather?units=${unit}&q=${uriEncodedCity}`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
          "x-rapidapi-key":
            "2e257f5ac8msh42fbe226d66b0d2p1c9cf5jsn565283584306",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  return (
    // JSX code will go here
    <div>
      <h2>Find Current Weather Conditions</h2>

      <form onSubmit={getForecast}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button type="submit">Get Forecast</button>
      </form>
      <Conditions responseObj={responseObj} />
    </div>
  );
};
export default Forecast;
