import React from "react";
import "@testing-library/jest-dom";
import { customRender } from "../../../testUtils";
import { AnalyticsSidebar } from "../AnalyticsSidebar";
import { screen } from "../../../testUtils";

describe("<AnalyticsSidebar />", () => {
  test("should matchSnapshot", () => {
    const { asFragment } = customRender(
      <AnalyticsSidebar>Ramesh</AnalyticsSidebar>
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("should render the correct headers", () => {
    const headers = ["INSIGHTS", "LOCATIONS"];
    const { asFragment } = customRender(
      <AnalyticsSidebar>Ramesh</AnalyticsSidebar>
    );

    headers.map((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });
});
