import React from "react";
import { shallow } from "enzyme";
import Input from "../../components/common/Input";

describe("input component", () => {
  test("should render the input field correctly", () => {
    const props = {
      className: "hell world"
    };
    const wrapper = shallow(<Input {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
