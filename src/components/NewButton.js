import React from "react";
import styled from "styled-components";

const NewButton = (props) => {
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
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;

  &:hover {
    background: red;
    border-color: red;
  }
`;

export default NewButton;
