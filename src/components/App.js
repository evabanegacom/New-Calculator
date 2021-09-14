import React from 'react';
import styled from 'styled-components';
import Display from './display';
import ButtonPanel from './buttonPanel';
import calculate from '../logic/calculate';

const Calculator = styled.div`
/* stylelint-disable */
display: flex;
flex-direction: column;
width: 700px;
`;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName) {
    this.setState(data => calculate(data, btnName));
  }

  render() {
    const { total, next, operation } = this.state;
    const result = next || total || '0';

    return (
      <Calculator>
        <Display result={result.toString()} operation={operation} />
        <ButtonPanel handleClick={this.handleClick} />
      </Calculator>
    );
  }
}

export default App;
