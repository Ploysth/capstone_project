import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return (
    <StyledButton type="props.type" onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font: inherit;
  border: 1px solid #ffad00;
  background-color: #ffad00;
  color: #36436f;
  padding: 0.65rem 3rem;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #05164d;
    border-color: #05164d;
    color: white;
  }
`;

export default Button;
