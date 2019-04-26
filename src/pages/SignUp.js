import React, { Component } from 'react';

export default class SignUp extends Component {
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
              <input type="email" placeholder="Email ..." />
            </div>
            <div className="password sign_up">
              <img
                src={require('../assets/icons/locked.svg')}
                alt="password"
                className="icon"
              />
              <input type="password" placeholder="Password ..." />
            </div>
            <button className="btn">Sign Up</button>
          </div>
        </div>
      </div>
    );
  }
}
