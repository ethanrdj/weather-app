import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = (props) => {
  const { forecast } = props;

  return (
    <>
      <div className="date" data-testid="date-id">
        <span>{moment(forecast.date).format("ddd Do MMM")}</span>
      </div>
      <div className="max temperature" data-testid="max-temperature-id">
        <span>Max Temperature:{forecast.temperature.max}&deg;c</span>
      </div>
      <div className="min temperature" data-testid="min-temperature-id">
        <span>Min Temperature:{forecast.temperature.min}&deg;c</span>
      </div>
      <div className="humidity" data-testid="humidity-id">
        <span>Humidity:{forecast.humidity}%</span>
      </div>
      <div className="wind speed" data-testid="wind-speed-id">
        <span>Wind Speed:{forecast.wind.speed}mph&deg;c</span>
      </div>
      <div className="wind direction" data-testid="wind-direction-id">
        <span>Wind Direction:{forecast.wind.direction}</span>
      </div>
    </>
  );
};

ForecastDetails.prototype = {
  forecast: PropTypes.object.isRequired,
};

export default ForecastDetails;
