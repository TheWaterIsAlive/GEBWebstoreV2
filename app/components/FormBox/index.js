/**
 *
 * FormBox
 *
 */

import propTypes from 'prop-types';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const FormBox = ({ onType, completed, text }) => (
  <input onType={onType}>{text}</input>
);

FormBox.propTypes = {
  onType: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormBox;
