import React from "react";
import { shallow } from "enzyme";
import Track from "./Track";
import { findByTestAttrib } from "./utils/testing/utilsTest";

const defaultProps = {};

// Factory function to creare a shallowWrapper
const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Track {...setupProps} />);
};

describe("Test UI", () => {
  test("render Track without error", () => {
    const wrapper = setup();
    const component = findByTestAttrib(wrapper, "track-component");
    expect(component.length).toBe(1);
  });
});
