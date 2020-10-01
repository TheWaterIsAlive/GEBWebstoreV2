/**
 *
 * Router
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Router() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Router.propTypes = {};

export default Router;
