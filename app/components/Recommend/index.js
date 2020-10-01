/**
 *
 * Recommend
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Recommend() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Recommend.propTypes = {};

export default Recommend;
