/**
 *
 * Router
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';
import RouterButton from '../RouterButton';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #CDFFF9;
  white-space: nowrap;
  li {
    /* display: inline; */
    background-color: #C5D9E2;
    width:20%;
    display: inline-block;
  }
  li:hover {
    background-color: #A5FFD6;

  }
  li:active {
    background-color: #A5FFD6;
  }
  a {
    text-align: center;
    display: block;
    padding: 20px;
    text-decoration: none;
    color: #817f75;
  }
  a:active {
    background-color: #A5FFD6;
  }
  
`;

function Router() {
  return (
    <Ul>
      <RouterButton buttonText="Home" buttonLink="/" />
      <RouterButton buttonText="F.A.Q" buttonLink="/FAQ" />
      <RouterButton buttonText="Cart" buttonLink="/Cart" />
      <RouterButton buttonText="Search" buttonLink="/Search" />
      <RouterButton buttonText="Log In" buttonLink="/Login" />
    </Ul>
  );
}

Router.propTypes = {};

export default Router;
