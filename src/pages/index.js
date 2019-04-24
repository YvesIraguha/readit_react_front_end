import React from 'react';
import { connect } from 'react-redux';
import { trialMethod } from '../redux/actions/index';
export const HelloWorld = () => <h1>Hello there world!</h1>;
const Button = props => (
  <button className="btn" onClick={e => props.firstMethod()}>
    Click!
  </button>
);
const mapDispatchToProps = dispatch => ({
  firstMethod: () => dispatch(trialMethod())
});

export default connect(
  null,
  mapDispatchToProps
)(Button);
