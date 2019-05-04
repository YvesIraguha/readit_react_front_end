import http from "../../utils/axios";
import "@babel/polyfill";
import {
  LOGGED_IN,
  SUBMITTING_CREDENTIALS,
  LOGGING_FAILURE,
  LOGGING_OUT,
  LOGOUT
} from "../actionTypes";

export const logIn = user => async dispatch => {
  try {
    dispatch({ type: SUBMITTING_CREDENTIALS });
    const response = await http.post("/auth/login", {
      ...user
    });
    await localStorage.setItem("token", response.data.token);
    dispatch({ type: LOGGED_IN, payload: response.data });
  } catch (error) {
    const { message } = error.response.data;
    dispatch({ type: LOGGING_FAILURE, payload: message });
  }
};

// export const logout = user => async dispatch => {
//   try {
//     dispatch({ type: LOGGING_OUT });
//   } catch (error) {
//     const { message } = error.response.data;
//     dispatch({ type: LOGGING_FAILURE, payload: message });
//   }
// };
