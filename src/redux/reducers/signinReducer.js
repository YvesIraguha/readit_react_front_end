import {
  LOGGED_IN,
  SUBMITTING_CREDENTIALS,
  LOGGING_FAILURE,
  LOGGING_OUT,
  LOGOUT
} from "../actionTypes";
const initialState = {
  isSubmitting: false
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN:
      return {
        ...state,
        token: action.payload,
        isSubmitting: false
      };
    case SUBMITTING_CREDENTIALS:
      return {
        ...state,
        isSubmitting: true
      };
    case LOGGING_FAILURE:
      return {
        ...state,
        isSubmitting: false,
        error: action.payload
      };
    case LOGOUT:
      return {
        ...state,
        isSubmitting: false,
        response: action.payload
      };
    case LOGGING_OUT:
      return {
        ...state,
        isSubmitting: true
      };
    default:
      return {
        ...state
      };
  }
};
