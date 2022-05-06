import React from "react";
import FormCheckIn from "../FormCheckIn";
import styled from "styled-components";

export default function CheckInPage({ values, setValues }) {
  return (
    <section>
      <Header>Add new Check In</Header>
      <FormCheckIn values={values} setValues={setValues} />
    </section>
  );
}

const Header = styled.h1`
  font-size: 36px;
  font-weight: 300;
  color: #36436f;
  display: flex;
  justify-content: center;
`;
