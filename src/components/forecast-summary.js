import React from "react";
import PropTypes from "prop-types";

const ForecastSummary = (props) => {
  const { date, temperature, description, icon } = props;

  return (
    <>
      <span className="date">{`${date}`}</span>
      <span className="temperature">{`${temperature}`}</span>
      <span className="description">{`${description}`}</span>
      <span className="icon">{`${icon}`}</span>
    </>
  );
};

ForecastSummary.prototype = {
  date: PropTypes.string.isRequired,
  temperature: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ForecastSummary;
