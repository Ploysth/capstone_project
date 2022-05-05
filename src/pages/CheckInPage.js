import React from "react";
import FormCheckIn from "../FormCheckIn";
import styled from 'styled-components';
import { Link } from "react-router-dom";

export default function CheckInPage({ values, setValues }) {
  return (
    <section>
      
      <Link to="/boardingForm">Add new Boarding</Link>
      <Link to="/breakForm">Add new Break</Link>

      <Header>Add new Check In</Header>
      <FormCheckIn values={values} setValues={setValues} />
      

    </section>
  );
}

const Header = styled.h1`

font-size: 36px;
font-weight: 300;
color: #36436F;
display: flex;
justify-content: center;
`;