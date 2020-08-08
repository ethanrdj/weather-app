import React, { useState, useEffect } from "react";
import axios from "axios";
import LocationDetails from "./location-details.js";
import ForecastSummaries from "./forecast-summaries";
import ForecastDetails from "./forecast-details";
import SearchForm from "./search-form";

import "../styles/app.css";

const App = (props) => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    async function fetchData() {
      await axios
        .get("https://mcr-codes-weather.herokuapp.com/forecast")
        .then((res) => {
          setForecasts(res.data.forecasts);
          setLocation(res.data.location);
        })
        .catch((err) => {
          console.log("Server Error");
        });
    }
    fetchData();
  }, []);

  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );

  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };

  const handleSearchText = (text) => {
    setSearchText(text);
  };

  const searchAPIForLocation = (location) => {
    async function fetchData() {
      axios
        .get(
          `https://mcr-codes-weather.herokuapp.com/forecast/city=${location}`
        )
        .then((res) => {
          setLocation(res.data.location);
          setForecasts(res.data.forecasts);
        });
    }
    fetchData();
  };

  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />

      <SearchForm
        text={handleSearchText}
        value={searchText}
        searchValue={searchAPIForLocation}
      />

      <ForecastSummaries
        forecasts={forecasts}
        onForecastSelect={handleForecastSelect}
      />

      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

export default App;
