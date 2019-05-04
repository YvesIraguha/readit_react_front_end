import React, { Component } from "react";
import { logIn as signIn } from "../redux/actions/loginActions";
import Input from "../components/common/Input";
import Validator from "../utils/validator";
import { connect } from "react-redux";

export class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: "",
    isSubmitting: this.props.isSubmitting
  };

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submitLoginCredentials() {
    const { email, password } = this.state;
    const { signIn } = this.props;
    const error = Validator.signUp({ email, password });
    if (error) {
      return this.displayError("Invalid email or password");
    }
    signIn({ email, password });
  }
  displayError(error) {
    this.setState({ error });
    setTimeout(() => {
      this.setState({ error: "" });
    }, 3000);
  }

  render() {
    const { email, password, error } = this.state;
    return (
      <div>
        {error.length > 12 ? <div className="error">{error}</div> : false}
        <div className="container">
          <div className="card">
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
              onClick={() => this.submitLoginCredentials()}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { signIn }
)(SignIn);
