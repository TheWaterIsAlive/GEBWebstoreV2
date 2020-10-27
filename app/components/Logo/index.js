/**
 *
 * Logo
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

const LogoStyle = styled.img`
  padding: 0px;
  display: inline-box;
  width: 100%;
  height: auto;

  @media (max-width: 1000px) {
    /* padding-left: 33%;
    padding-right: 33%; */
    float: center;
  }
`;
const Div = styled.div`
  background-color: #C5D9E2;
  display: inline-block;
  height: 100%;

`;

function Logo() {
  return (
    <Div>
      <LogoStyle src="https://plchldr.co/i/250x250" alt="plchldr.co" />
    </Div>
  );
}

Logo.propTypes = {};

export default Logo;
