import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, getAllByTestId } from "@testing-library/react";
import WeatherIconComponent from "../components/weather-icon";

describe("weather icon", () => {
  const icon = {
    name: "owm",
    iconId: "800",
    flip: "horizontal",
    rotate: "90",
  };
  xit("makes sure an icon is rendered", () => {
    const { getAllByAltTestId } = render(
      <WeatherIconComponent iconId={icon} />
    );

    expect(getAllByTestId("icon-id")).toBeTruthy();
  });
});
