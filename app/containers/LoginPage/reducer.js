/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { LOGIN, LOGINTYPE } from './constants';

export const initialState = {
  username: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) =>
  produce(state, (/* draft */) => {
    switch (action.type) {
      case LOGIN:
        break;

      case LOGINTYPE:
        (state.username = action.username), (state.password = action.password);
    }

    const mapStateToProps = state => {
      return {
        formbox: loginPageReducer(state.formbox),
      };
    };
  });

export default loginPageReducer;
