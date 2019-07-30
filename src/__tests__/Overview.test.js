import React from "react";
import TestRender from "react-test-renderer";
import Overview from "../templates/Overview";


describe("Overview", () => {
  test("it maches", () => {
    const component = TestRender.create(<Overview />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});