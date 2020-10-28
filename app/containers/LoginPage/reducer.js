/*
 *
 * LoginPage reducer
 *
 */
import produce from 'immer';
import { connect } from 'react-redux';
import FormBox from '../../components/FormBox';
import { LOGIN, LOGINTYPE, REMEMBERLOGIN } from './constants';

export const initialState = {
  username: '',
  password: '',
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = (state = initialState, action) => {
  produce(state, () => {
    switch (action.type) {
      case LOGIN:
        break;
      case LOGINTYPE:
        break;
    }

    function mapStateToProps() {
      return {
        formbox: loginPageReducer(state.formbox),
      };
    }
    const mapDispatchToProps = dispatch => ({
      onFormType: id => {
        dispatch(REMEMBERLOGIN(id));
      },
    });
    const finalLogin = connect(
      mapStateToProps,
      mapDispatchToProps,
    )(FormBox);
  });
};

export default loginPageReducer;
