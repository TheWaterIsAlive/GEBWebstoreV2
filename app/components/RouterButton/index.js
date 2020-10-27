/**
 *
 * RouterButton
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import { NavLink } from 'react-router-dom';
// import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

// const navButton = styled.button`
//   background-color: #4caf50; /* Green */
//   border: none;
//   color: white;
//   padding: 15px 32px;
//   text-align: center;
//   text-decoration: none;
//   display: inline-block;
//   font-size: 16px;
// `;

const RouterButton = props => (
  <li>
    <a href={props.buttonLink}>{props.buttonText}</a>
  </li>
);

RouterButton.propTypes = {
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
};

export default RouterButton;
