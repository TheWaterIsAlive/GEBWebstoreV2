/*
 *
 * LoginPage actions
 *
 */

import { LOGIN, LOGINTYPE } from './constants';

// export function defaultAction() {
//   return {
//     type: DEFAULT_ACTION,
//   };
export function loginType() {
  return {
    type: LOGINTYPE,
    string: username,
    string: password,
  };
}
export function login() {
  return {
    type: LOGIN,
    string: username,
    string: password,
  };
}

// }
