/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import FormBox from '../FormBox';

// import styled from 'styled-components';

const Login = ({ formbox, onFormType }) => (
  <form>
    <FormBox
      key={formbox.id}
      {...formbox}
      onType={() => onFormType(formbox.id)}
    />
    <input type="submit" id="submit" />
  </form>
);

Login.propTypes = {
  formbox: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onFormType: PropTypes.func.isRequired,
};

export default Login;
