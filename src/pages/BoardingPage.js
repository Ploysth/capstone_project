import React from 'react'
import FormBoarding from '../FormBoarding';
import styled from 'styled-components';

export default function BoardingPage({ values, setValues }) {
  return (
      <>
    <Header>Add new Boarding</Header>
    <FormBoarding values={values} setValues={setValues}/>

    </>
  )
}

const Header = styled.h1`

font-size: 36px;
font-weight: 300;
color: #36436F;
display: flex;
justify-content: center;
`;