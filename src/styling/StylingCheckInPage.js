import styled from "styled-components";

const Form = styled.section`
  margin: 2rem auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  background-color: white;

  h3 {
    font-size: 25px;
    color: #36436f;
    font-weight: 100;
    display: flex;
    justify-content: center;
    padding-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  label {
    display: block;
    font-weight: regular;
    margin-bottom: 0.5rem;
    color: #36436f;
    font-size: 12px;
  }

  input {
    font: inherit;
    display: block;
    width: 100%;
    border: 1px solid #36436f;
    padding: 0.15rem;
    margin-bottom: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-transform: uppercase;
    color: #36436f;
  }
`;

const WrapperTime = styled.div`
  display: flex;
  justify-content: space-between;

  color: #36436f;
`;

const TimeSection = styled.section`
  display: block;

  label {
    display: block;
    margin-bottom: 0.5rem;
    font-size: 12px;
  }

  input {
    font: inherit;
    width: 140px;
    height: 23.3px;
    border: 1px solid #36436f;
    margin-bottom: 0.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    text-transform: uppercase;
    color: #36436f;
  }
`;

const ButtonSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 3rem;
`;

const ButtonSectionBreak = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 306px;
`;

export {
  Form,
  Wrapper,
  WrapperTime,
  TimeSection,
  ButtonSection,
  ButtonSectionBreak,
};
