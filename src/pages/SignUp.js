import React, { Component } from 'react';
import Input from '../components/common/Input';
import { signUp } from '../redux/actions/singupAction';
import { connect } from 'react-redux';
export const mapDispatchToProps = dispatch => ({
  sendSignUpInfo: user => dispatch(signUp(user))
});
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  submitSignUpCredentials() {
    const { email, password, lastName, firstName } = this.state;
    const { sendSignUpInfo } = this.props;
    sendSignUpInfo({ email, password, lastName, firstName });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="card">
            <div className="email sign_up">
              <img
                src={require('../assets/icons/email.svg')}
                alt="Email"
                className="icon"
              />
              <Input
                type="email"
                name="email"
                placeholder="Email ..."
                onChange={e => this.onInputChange(e)}
              />
              <Input
                type="email"
                name="lastName"
                placeholder="Last name ..."
                onChange={e => this.onInputChange(e)}
              />
              <Input
                type="email"
                name="firstName"
                placeholder="first name ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <div className="password sign_up">
              <img
                src={require('../assets/icons/locked.svg')}
                alt="password"
                className="icon"
              />
              <Input
                type="password"
                name="password"
                placeholder="Password ..."
                onChange={e => this.onInputChange(e)}
              />
            </div>
            <button
              className="btn"
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

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
