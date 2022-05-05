import React from 'react'
import FormBreak from '../FormBreak';
import styled from 'styled-components';

export default function BreakPage({ values, setValues }) {
  return (
    <>
    <Header>Add new Break</Header>
    <FormBreak values={values} setValues={setValues}/>

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