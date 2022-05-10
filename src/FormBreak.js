import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import styled from "styled-components";

export default function FormBreak({ values, setValues }) {
  const handleStartInputChange = (event) => {
    setValues({ ...values, timeStartBreak: event.target.value });
  };

  const handleEndInputChange = (event) => {
    setValues({ ...values, timeEndBreak: event.target.value });
  };

  return (
    <Form>
      <label>Uhrzeit von:</label>
      <Input
        handleInputChange={handleStartInputChange}
        value={values.timeStartBreak}
        className="form-field"
        placeholder="Uhrzeit von"
        name="timeStart"
      />

      <label>Uhrzeit bis:</label>
      <Input
        handleInputChange={handleEndInputChange}
        value={values.timeEndBreak}
        className="form-field"
        placeholder="Uhrzeit bis"
        name="timeEnd"
      />
      <Button>Speichern</Button>
    </Form>
  );
}

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 95%;
  align-items: center;
  gap: 20px;
`;
