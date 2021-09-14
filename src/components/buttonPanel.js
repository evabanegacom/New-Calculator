import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from './button';

const ButtonPanel = ({ handleClick }) => {
  const Bottin = styled.div`
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

  const buttonList = buttonGroups.map((btnGrp, idx) => (
    <Bottin key={idx}>
      {btnGrp.map((btn, id) => (orangeBtns.includes(btn) ? (
        <Button
          key={id}
          name={btn}
          handleClick={handleClick}
          /> /*eslint-disable-line*/
      ) : btn === '0' ? (
        <Button
          key={id}
          name={btn}
          color="#E0E0E0"
          wide
          handleClick={handleClick}
        />
      ) : (
        <Button
          key={id}
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
