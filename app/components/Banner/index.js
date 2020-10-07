/**
 *
 * Banner
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const BannerBox = styled.img`
  padding: 0px;
  text-align: right;
  background: #1abc9c;
  color: white;
  font-size: 30px;
  display: inline-box;
  width: 70%;
  height: auto;
  @media (max-width: 1000px) {
    display: none;
  }
`;

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

function Banner() {
  return <BannerBox src="https://plchldr.co/i/750x250" alt="plchldr.co" />;
}

Banner.propTypes = {};

export default Banner;
