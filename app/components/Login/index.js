/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Login() {
  return (
    <form>
      <input type="text" id="loginName" />
      <input type="text" id="password" />
      <input type="submit" id="submit" />
    </form>
  );
}

Login.propTypes = {};

export default Login;
