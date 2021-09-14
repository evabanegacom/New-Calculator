import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Display = ({ result, operation }) => {
  const Buttons = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-end;
    background: gray;
    height: 100px;
    color: #fff;
    font-weight: bold;
    padding: 10px;
    font-size: 30px;
`;
  return <Buttons>{`${result} ${operation || ""}`}</Buttons>;
};

Display.propTypes = {
  result: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  result: "0",
  operation: "",
};

export default Display;
