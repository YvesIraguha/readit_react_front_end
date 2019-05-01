import http from "../../utils/axios";

import "@babel/polyfill";
import {
  SUBMITTING_CREDENTIALS,
  SIGNED_UP,
  SIGN_UP_FAILURE
} from "../actionTypes";

export const signUp = user => async dispatch => {
  try {
    dispatch({ type: SUBMITTING_CREDENTIALS });
    const response = await http.post("/users", {
      ...user
    });

    dispatch({ type: SIGNED_UP, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: SIGN_UP_FAILURE, payload: message });
  }
};
