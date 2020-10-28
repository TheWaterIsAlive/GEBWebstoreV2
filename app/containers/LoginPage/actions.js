/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGINTYPE, REMEMBERLOGIN } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
export function loginType() {
  return {
    type: LOGINTYPE,
    username: '',
    password: '',
  };
}
export function login() {
  return {
    type: LOGIN,
    username: '',
    password: '',
  };
}
export function remembeLogin() {
  return {
    type: REMEMBERLOGIN,
  };
}

// }
