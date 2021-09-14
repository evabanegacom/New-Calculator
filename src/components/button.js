import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = ({
  name, color, wide, handleClick,
}) => {
  const Botton = styled.button`
    /* stylelint-disable */
    font-weight: bold;
    font-size: 20px;
    border: 1px solid #bbb;
    outline: none;
    cursor: pointer;
    background: ${color};
    width: ${wide ? '50%' : '25%'};
  `;
  return (
    <Botton
      onClick={() => {
        handleClick(name);
      }}
      type="button"
    >
      {name}
    </Botton>
  );
};
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
