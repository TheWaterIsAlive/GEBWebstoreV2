/**
 *
 * CartPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCartPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export function CartPage() {
  useInjectReducer({ key: 'cartPage', reducer });
  useInjectSaga({ key: 'cartPage', saga });

  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

CartPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartPage: makeSelectCartPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CartPage);
