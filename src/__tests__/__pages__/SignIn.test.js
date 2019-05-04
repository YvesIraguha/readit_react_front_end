import React from "react";
import { shallow } from "enzyme";
import { SignIn, mapStateToProps } from "../../pages/SignIn";
import Input from "../../components/common/Input";

describe("sign up component", () => {
  test("should render the component with all inputs", () => {
    const wrapper = shallow(<SignIn isSubmitting={false} />);
    expect(wrapper.find(Input)).toHaveLength(2);
  });

  test("should respond to the changes in email input", () => {
    const wrapper = shallow(<SignIn isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "iraguhaivo@gmail.com",
          name: "email"
        }
      });
    expect(wrapper.state().email).toEqual("iraguhaivo@gmail.com");
  });
  test("should respond to the changes on password input", () => {
    const wrapper = shallow(<SignIn isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "iraguha",
          name: "password"
        }
      });
    expect(wrapper.state().password).toEqual("iraguha");
  });

  test("should submit sign in credentials", () => {
    const props = {
      isSubmitting: false,
      signIn: jest.fn()
    };
    const wrapper = shallow(<SignIn {...props} />);
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "iraguha@gmail.com",
          name: "email"
        }
      });
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "yvesir",
          name: "password"
        }
      });
    wrapper.find("button").simulate("click");
    expect(props.signIn).toHaveBeenCalledWith({
      email: "iraguha@gmail.com",
      password: "yvesir"
    });
  });
  test("should deny submitting sign in credentials with error", () => {
    const props = {
      isSubmitting: false,
      signIn: jest.fn()
    };
    const wrapper = shallow(<SignIn {...props} />);
    wrapper.find("button").simulate("click");
    expect(wrapper.state().error).toEqual("Invalid email or password");
  });
});
