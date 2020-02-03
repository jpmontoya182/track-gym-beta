import React from "react";
import { shallow } from "enzyme";
import Home from "./Home";
import { findByTestAttrib } from "../utils/testing/utilsTest";

const defaultProps = {};

// Factory function to creare a shallowWrapper
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Home {...setupProps} />);
};

describe("Test UI", () => {
  test("render without error", () => {
    const wrapper = setup();
    const component = findByTestAttrib(wrapper, "home-component");
    expect(component.length).toBe(1);
  });
});
