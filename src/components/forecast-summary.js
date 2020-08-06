import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon, handleForecastSelect } = props;
  return (
    <>
      <div className="date" data-testid="date-id">
        {date}
      </div>
      <div className="temperature" data-testid="temperature-id">
        {temperature}&deg;c
      </div>
      <div className="description" data-testid="description-id">
        {description}
      </div>
      <div className="icon" data-testid="icon-id">
        {icon}
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
