import React from "react";
import "@testing-library/jest-dom";
import { customRender } from "../../../testUtils";
import { AnalyticsFeedBar } from "../AnalyticsFeedBar";

describe("<AnalyticsFeedBar />", () => {
  test("should matchSnapshot", () => {
    const { asFragment } = customRender(
      <AnalyticsFeedBar>Ramesh</AnalyticsFeedBar>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
