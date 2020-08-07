import React from "react";
import ForecastSummary from "./forecast-summary";
import PropTypes from "prop-types";

import "../styles/forecast-summaries.css";

const ForecastSummaries = (props) => {
  const { forecasts, onForecastSelect } = props;
  return (
    <div className="forecast-summaries">
      {forecasts.map((forecast) => (
        <ForecastSummary
          key={forecast.date}
          date={forecast.date}
          description={forecast.description}
          icon={forecast.icon}
          temperature={forecast.temperature.max}
          onSelect={onForecastSelect}
        />
      ))}
    </div>
  );
};

ForecastSummaries.prototype = {
  forecasts: PropTypes.array.isRequired,
  onForecastSelect: PropTypes.func.isRequired,
};
export default ForecastSummaries;
