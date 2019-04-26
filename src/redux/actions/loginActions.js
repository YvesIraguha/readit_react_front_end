import {
  LOGGED_IN,
  SUBMITTING_CREDENTIALS,
  LOGGING_FAILURE,
  LOGGING_OUT,
  LOGOUT
} from '../actionTypes';

export const logIn = user => async dispatch => {
  try {
    dispatch({ type: SUBMITTING_CREDENTIALS });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: LOGGING_FAILURE, payload: message });
  }
};

export const logout = user => async dispatch => {
  try {
    dispatch({ type: LOGGING_OUT });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: LOGGING_FAILURE, payload: message });
  }
};
