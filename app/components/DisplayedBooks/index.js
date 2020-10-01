/**
 *
 * DisplayedBooks
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function DisplayedBooks() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

DisplayedBooks.propTypes = {};

export default DisplayedBooks;
