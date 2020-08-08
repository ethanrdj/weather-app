import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import WeatherIconComponent from "./weather-icon";

import "../styles/forecast-summary.css";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, onSelect } = props;
  return (
    <div className="forecast-summary">
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
      <button className="button" onClick={() => onSelect(date)}>
        More Details
      </button>
    </div>
  );
};

ForecastSummary.prototype = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.any.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
