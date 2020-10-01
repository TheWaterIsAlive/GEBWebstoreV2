/**
 *
 * Search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Search() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Search.propTypes = {};

export default Search;
