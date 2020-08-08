import React from "react";
// import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";

const WeatherIconComponent = (props) => {
  return (
    <div data-testid="icon-id">
      <WeatherIcon
        name="owm"
        iconId={props.iconId}
        flip="horizontal"
        rotate="90"
      />
    </div>
  );
};

export default WeatherIconComponent;
