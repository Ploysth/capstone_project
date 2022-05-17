import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navigation() {
  return (
    <NavLink>
      <StyledLink to="/checkin">Add CheckIn</StyledLink>
      <StyledLink to="/">Show Cards</StyledLink>
    </NavLink>
  );
}

const NavLink = styled.nav`
  display: flex;
  gap: 2em;
  margin: 1em;
`;

const StyledLink = styled(Link)`
  background-color: #ffad00;
  color: #36436f;
  font-size: 14px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
