/**
 *
 * FormBox
 *
 */

// import  from 'prop-types';
import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const FormBox = ({ onType, text }) => <input onType={onType} />;

FormBox.propTypes = {
  onType: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default FormBox;
