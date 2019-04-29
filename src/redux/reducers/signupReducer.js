import {
  SIGNED_UP,
  SUBMITTING_CREDENTIALS,
  SIGN_UP_FAILURE
} from '../actionTypes';
const initialState = {
  isSubmitting: false
};
export const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNED_UP:
      return {
        ...state,
        token: action.payload
      };
    case SUBMITTING_CREDENTIALS:
      return {
        ...state,
        isSubmitting: true
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
