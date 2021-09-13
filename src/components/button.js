import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Button = ({
  name, color, wide, handleClick,
}) => (
  <button onClick={() => { handleClick(name); }} type="button" className="button-name" style={{ background: color, width: wide ? '50%' : '25%' }}>
    {name}
  </button>
);
Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  wide: false,
  color: 'orange',
};

export default Button;