/**
 *
 * Header
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import Logo from '../Logo';
import Banner from '../Banner';
import Router from '../Router';

function Header() {
  return (
    <div>
      <div>
        <Logo />
        <Banner />
      </div>
      <div>
        <Router />
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
