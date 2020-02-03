import React from "react";
import { shallow } from "enzyme";
import Login from "./Login";
import { findByTestAttrib } from "../utils/testing/utilsTest";

const defaultProps = {};

// Factory function to creare a shallowWrapper
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Login {...setupProps} />);
};

describe("Test UI", () => {
  test("render without error", () => {
    const wrapper = setup();
    const component = findByTestAttrib(wrapper, "login-component");
    expect(component.length).toBe(1);
  });
});
