import styled from "styled-components";

const Form = styled.fieldset`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
`;

const Wrapper = styled.div`
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid black;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-transform: uppercase;
  }

  &.invalid label {
    color: red;
  }

  p {
    color: white;
    background-color: #ce0d0d;
    font-size: 12px;
    padding: 0.3rem;
  }
`;

export { Form, Wrapper };
