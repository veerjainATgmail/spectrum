// @flow
import { SecureStore } from 'expo';

export type AuthenticateAction = {
  type: 'AUTHENTICATE',
  token: ?string,
};

export const authenticate = (token: ?string) => {
  return {
    type: 'AUTHENTICATE',
    token,
  };
};

export const logout = () => {
  SecureStore.deleteItemAsync('token');
  return {
    type: 'LOGOUT',
  };
};
