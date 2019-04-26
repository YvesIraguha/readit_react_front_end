import {
  SUBMITTING_CREDENTIALS,
  SIGNED_UP,
  SIGN_UP_FAILURE
} from '../actionTypes';

export const signUp = user => async dispatch => {
  try {
    dispatch({ type: SUBMITTING_CREDENTIALS });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: SIGN_UP_FAILURE, payload: message });
  }
};
