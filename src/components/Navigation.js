import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <NavLink>
      <StyledLink to="/checkin">Add new Check In</StyledLink>
      <StyledLink to="/boardingForm">Add new Boarding</StyledLink>
      <StyledLink to="/breakForm">Add new Break</StyledLink>
      <StyledLink to="/">Show Cards</StyledLink>
    </NavLink>
  );
}

const NavLink = styled.div`
  display: flex;
  gap: 2em;
  margin: 1em;

  a {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledLink = styled(Link)`
  background-color: #ffad00;
  color: #36436f;
  font-size: 14px;
`;
