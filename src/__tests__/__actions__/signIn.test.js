import moxios from 'moxios';
import dotenv from 'dotenv';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from '../../utils/axios';
import * as signIn from '../../redux//actions/loginActions';
import {
  LOGGED_IN,
  SUBMITTING_CREDENTIALS,
  LOGGING_FAILURE
} from '../../redux/actionTypes';

dotenv.config();
const BASE_URL = process.env.BASE_URL;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Sign in actions', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  test('should login successfully', async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/auth/login`, {
      status: 200,
      response: { token: 'helloWorlod' }
    });
    store
      .dispatch(
        signIn.logIn({ email: 'iraguhaivos@gmail.com', password: 'password' })
      )
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: SUBMITTING_CREDENTIALS },
          { type: LOGGED_IN, payload: { token: 'helloWorlod' } }
        ]);
      });
  });
  test('should fail to login ', async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/auth/login`, {
      status: 400,
      response: {
        message: 'Invalid email or password'
      }
    });
    store
      .dispatch(signIn.logIn({ email: 'iraguhagmail.com', password: 'hello' }))
      .then(() => {
        expect(store.getActions()).toEqual([
          { type: SUBMITTING_CREDENTIALS },
          { type: LOGGING_FAILURE, payload: 'Invalid email or password' }
        ]);
      });
  });
});
