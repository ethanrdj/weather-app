import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/forecast-details";

describe("ForecastDetails", () => {
  const forecast = {
    date: 1525046400000,
    temperature: {
      max: 11,
      min: 4,
    },
    humidity: 30,
    wind: {
      speed: 13,
      direction: "s",
    },
  };

  it("renders the correct props", () => {
    const { getAllByTestId, getByText } = render(
      <ForecastDetails forecast={forecast} />
    );

    expect(getAllByTestId("date-id")).toBeTruthy();
    expect(getByText("Mon 30th Apr")).toBeInTheDocument();
    expect(getAllByTestId("date-id")).toHaveLength(1);
    expect(getAllByTestId("max-temperature-id")).toHaveLength(1);
  });
});
