import React, { Component } from 'react';
import { logIn } from '../redux/actions/loginActions';
import Input from '../components/common/Input';
import { connect } from 'react-redux';
const mapDispatchToProps = dispatch => ({
  signIn: user => dispatch(logIn(user))
});
class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onInputChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }
  submitLoginCredentials() {
    const { email, password } = this.state;
    const { signIn } = this.props;
    signIn({ email, password });
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
  mapDispatchToProps
)(SignIn);
