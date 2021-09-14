import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';

const ButtonPanel = ({ handleClick }) => {
  const Bottin = styled.div`
  /* stylelint-disable */
    height: 100px;
    display: flex;
    justify-content: space-evenly;
  `;
  const buttonGroups = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  const orangeBtns = ['÷', 'x', '-', '+', '='];
  const buttonList = buttonGroups.map(btnGrp => (
    <Bottin key={btnGrp}>
      {btnGrp.map(btn => (orangeBtns.includes(btn) ? (
        <Button
          key={btn}
          name={btn}
          handleClick={handleClick}
        />
      ) : btn === '0' ? (
        <Button
          key={btn}
          name={btn}
          color="#E0E0E0"
          wide
          handleClick={handleClick}
        />
      ) : (
        <Button
          key={btn}
          name={btn}
          color="#E0E0E0"
          handleClick={handleClick}
        />
      )))}
    </Bottin>
  ));

  return <div>{buttonList}</div>;
};

ButtonPanel.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ButtonPanel;
