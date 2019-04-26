import { combineReducers } from 'redux';
import { articleReducer } from './articleReducer';
import { signUpReducer } from './signupReducer';
import { loginReducer } from './signinReducer';

export default combineReducers({
  signUp: signUpReducer,
  logIn: loginReducer,
  article: articleReducer
});
