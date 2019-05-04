import React from "react";
import { shallow } from "enzyme";
import { SignUp, mapStateToProps } from "../../pages/SignUp";
import Input from "../../components/common/Input";

describe("sign up component", () => {
  test("should render the component with all inputs", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    expect(wrapper.find(Input)).toHaveLength(4);
  });
  test("should respond to the changes on first name input", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "Iraguha",
          name: "firstName"
        }
      });
    expect(wrapper.state().firstName).toEqual("Iraguha");
  });
  test("should respond to the changes on last name input", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "Yvess",
          name: "lastName"
        }
      });
    expect(wrapper.state().lastName).toEqual("Yvess");
  });
  test("should respond to the changes in emnail input", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(2)
      .simulate("change", {
        target: {
          value: "iraguhaivo@gmail.com",
          name: "email"
        }
      });
    expect(wrapper.state().email).toEqual("iraguhaivo@gmail.com");
  });
  test("should respond to the changes on password input", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    wrapper
      .find(Input)
      .at(3)
      .simulate("change", {
        target: {
          value: "iraguha",
          name: "password"
        }
      });
    expect(wrapper.state().password).toEqual("iraguha");
  });
  test("should redirect to home page on successful registration", () => {
    const props = {
      isSubmitting: false,
      history: {
        push: jest.fn()
      }
    };
    const wrapper = shallow(<SignUp {...props} />);
    wrapper.instance().componentWillReceiveProps({ user: "Iraguha" });
    expect(props.history.push).toHaveBeenCalledWith("/");
  });
  test("should display error when email is already taken", () => {
    const wrapper = shallow(<SignUp isSubmitting={false} />);
    wrapper.instance().componentWillReceiveProps({});
    expect(wrapper.state().error).toEqual("The email is already taken");
  });
  test("should submit sign up credentials", () => {
    const props = {
      isSubmitting: false,
      sendSignUpInfo: jest.fn()
    };
    const wrapper = shallow(<SignUp {...props} />);
    wrapper
      .find(Input)
      .at(0)
      .simulate("change", {
        target: {
          value: "iraguha",
          name: "firstName"
        }
      });
    wrapper
      .find(Input)
      .at(1)
      .simulate("change", {
        target: {
          value: "iraguha",
          name: "lastName"
        }
      });
    wrapper
      .find(Input)
      .at(2)
      .simulate("change", {
        target: {
          value: "iraguha@gmail.com",
          name: "email"
        }
      });
    wrapper
      .find(Input)
      .at(3)
      .simulate("change", {
        target: {
          value: "yvesir",
          name: "password"
        }
      });
    wrapper.find("button").simulate("click");
    expect(props.sendSignUpInfo).toHaveBeenCalledWith({
      firstName: "iraguha",
      lastName: "iraguha",
      email: "iraguha@gmail.com",
      password: "yvesir"
    });
  });
  test("should deny submitting sign up credentials with error", () => {
    const props = {
      isSubmitting: false,
      sendSignUpInfo: jest.fn()
    };
    const wrapper = shallow(<SignUp {...props} />);
    wrapper.find("button").simulate("click");
    expect(wrapper.state().error).toEqual(
      "firstName should be more than 5 characters long"
    );
  });

  test("should map state to props", () => {
    expect(
      mapStateToProps({
        signUp: {
          message: "signed up successfully"
        }
      })
    ).toEqual({ message: "signed up successfully" });
  });
});
