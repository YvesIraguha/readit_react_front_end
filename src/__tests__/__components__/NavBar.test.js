import React from "react";
import { shallow } from "enzyme";
import Navbar from "../../components/common/NavBar";

describe("Navigation bar", () => {
  test("should render the navigation bar", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });
});
