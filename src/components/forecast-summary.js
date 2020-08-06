import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIconComponent from "./weather-icon";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, handleForecastSelect } = props;
  return (
    <>
      <div className="date" data-testid="date-id">
        <span>{moment(date).format("ddd Do MMM")}</span>
      </div>
      <div className="temperature" data-testid="temperature-id">
        <span>{temperature}&deg;c</span>
      </div>
      <div className="description" data-testid="description-id">
        <span>{description}</span>
      </div>
      <div className="forecast-summary__icon" data-testid="icon-id">
        <WeatherIconComponent name="owm" iconId={icon} />
      </div>
      <button value={date} onClick={handleForecastSelect}>
        More Details
      </button>
    </>
  );
};

ForecastSummary.prototype = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;
