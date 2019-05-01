import moxios from 'moxios';
import dotenv from 'dotenv';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import http from '../../utils/axios';
import * as signUp from '../../redux/actions/singupAction';
import {
  SUBMITTING_CREDENTIALS,
  SIGNED_UP,
  SIGN_UP_FAILURE
} from '../../redux/actionTypes';

dotenv.config();
const BASE_URL = process.env.BASE_URL;

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

describe('Sign up actions', () => {
  beforeEach(() => {
    moxios.install(http);
  });
  afterEach(() => {
    moxios.uninstall(http);
  });

  test('should return signed up successfully', async () => {
    const store = mockStore({});

    await moxios.stubRequest(`${BASE_URL}/users`, {
      status: 201,
      response: {
        message: 'User created successfully'
      }
    });
    store
      .dispatch(signUp.signUp({ firstName: 'Iraguha', lastName: 'l;astName' }))
      .then(() => {
        expect(store.getActions()).toEqual([
          {
            type: SUBMITTING_CREDENTIALS
          },
          {
            type: SIGNED_UP,
            payload: {
              message: 'User created successfully'
            }
          }
        ]);
      });
  });
  test('should return failed to sign up ', async () => {
    const store = mockStore({});
    await moxios.stubRequest(`${BASE_URL}/users`, {
      status: 400,
      response: {
        message: 'Bad request'
      }
    });

    store.dispatch(signUp.signUp({ firstName: 'Iraguha' })).then(() => {
      expect(store.getActions()).toEqual([
        {
          type: SUBMITTING_CREDENTIALS
        },
        {
          type: SIGN_UP_FAILURE,
          payload: 'Bad request'
        }
      ]);
    });
  });
});
