import {
  LOGGED_IN,
  SUBMITTING_CREDENTIALS,
  LOGGING_FAILURE,
  LOGGING_OUT,
  LOGOUT
} from "../../redux/actionTypes";

import { loginReducer } from "../../redux/reducers/signinReducer";

describe("Login reducers", () => {
  test("should return a token on successful loogin", () => {
    expect(
      loginReducer(
        {},
        {
          type: LOGGED_IN,
          payload: "hello world"
        }
      )
    ).toEqual({ token: "hello world", isSubmitting: false });
  });
  test("should return submitting credentials ", () => {
    expect(loginReducer({}, { type: SUBMITTING_CREDENTIALS })).toEqual({
      isSubmitting: true
    });
  });
  test("should return logging failure", () => {
    expect(
      loginReducer(
        {},
        {
          type: LOGGING_FAILURE,
          payload: { message: "You are not a user of this app" }
        }
      )
    ).toEqual({
      isSubmitting: false,
      error: {
        message: "You are not a user of this app"
      }
    });
  });
  test("should return logout ", () => {
    expect(loginReducer({}, { type: LOGGING_OUT })).toEqual({
      isSubmitting: true
    });
  });
  test("should return logout", () => {
    expect(
      loginReducer({}, { type: LOGOUT, payload: "Successfully logged out" })
    ).toEqual({
      isSubmitting: false,
      response: "Successfully logged out"
    });
  });
  test("should return default action", () => {
    expect(loginReducer(undefined, {})).toEqual({ isSubmitting: false });
  });
});
