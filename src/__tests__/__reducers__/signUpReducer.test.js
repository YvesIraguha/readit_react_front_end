import {
  SIGNED_UP,
  SUBMITTING_CREDENTIALS,
  SIGN_UP_FAILURE
} from "../../redux/actionTypes";
import { signUpReducer } from "../../redux/reducers/signupReducer";

describe("SignUp reducers ", () => {
  test("should return signed up successfully", () => {
    expect(
      signUpReducer(undefined, { type: SIGNED_UP, payload: "hello world" })
    ).toEqual({
      isSubmitting: false,
      token: "hello world"
    });
  });
  test("should return sign up failure", () => {
    expect(
      signUpReducer({}, { type: SIGN_UP_FAILURE, payload: "Invalid inputs" })
    ).toEqual({
      isSubmitting: false,
      error: "Invalid inputs"
    });
  });
  test("should return submitting credentials ", () => {
    expect(signUpReducer({}, { type: SUBMITTING_CREDENTIALS })).toEqual({
      isSubmitting: true
    });
  });
  test("should return default state", () => {
    expect(signUpReducer(undefined, {})).toEqual({
      isSubmitting: false
    });
  });
});
