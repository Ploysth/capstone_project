import React from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import { Form } from "./components/Form";

export default function FormBreak({ values, setValues }) {
  const handleStartInputChange = (event) => {
    setValues({ ...values, timeStartBreak: event.target.value });
  };

  const handleEndInputChange = (event) => {
    setValues({ ...values, timeEndBreak: event.target.value });
  };

  return (
    <div className="form-container">
      <h1>Add Break</h1>
      <Form className="checkin-form">
        <Input
          handleInputChange={handleStartInputChange}
          value={values.timeStartBreak}
          className="form-field"
          placeholder="Uhrzeit von"
          name="timeStart"
        />

        <Input
          handleInputChange={handleEndInputChange}
          value={values.timeEndBreak}
          className="form-field"
          placeholder="Uhrzeit bis"
          name="timeEndCheckIn"
        />
        <Button>Speichern</Button>
      </Form>
    </div>
  );
}
