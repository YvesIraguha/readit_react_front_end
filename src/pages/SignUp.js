import React, { Component } from "react";
import Input from "../components/common/Input";
import { signUp as sendSignUpInfo } from "../redux/actions/singupAction";
import Validator from "../utils/validator";
import { connect } from "react-redux";

export class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    error: "",
    isSubmitting: this.props.isSubmitting
  };

  onInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  submitSignUpCredentials = () => {
    const { email, password, lastName, firstName } = this.state;
    const { sendSignUpInfo } = this.props;
    const error = Validator.signUp({ firstName, lastName, email, password });
    if (error) {
      return this.displayError(error);
    }
    sendSignUpInfo({ firstName, lastName, email, password });
  };
  displayError = error => {
    this.setState({ error });
    setTimeout(() => {
      this.setState({ error: "" });
    }, 3000);
  };

  componentWillReceiveProps = nextProps => {
    if (nextProps.user) {
      this.props.history.push("/");
    } else {
      return this.displayError("The email is already taken");
    }
  };
  render() {
    const { email, password, lastName, firstName, error } = this.state;
    return (
      <div>
        {error.length > 5 ? <div className="error">{error}</div> : false}

        <div className="container">
          <div className="card">
            <div>
              <Input
                type="name"
                name="firstName"
                value={firstName}
                placeholder="first name ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div>
              <Input
                type="name"
                name="lastName"
                value={lastName}
                placeholder="Last name ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="email sign_up">
              <Input
                type="email"
                name="email"
                value={email}
                placeholder="Email ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="password sign_up">
              <Input
                type="password"
                name="password"
                value={password}
                placeholder="Password ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <button
              className="btn"
              disabled={this.isSubmitting}
              onClick={() => this.submitSignUpCredentials()}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export const mapStateToProps = state => ({
  ...state.signUp
});
export default connect(
  mapStateToProps,
  { sendSignUpInfo }
)(SignUp);
