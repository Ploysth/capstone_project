import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <Footer>
      <nav>
        <NavList>
          <NavLink to="/checkin">Add CheckIn</NavLink>
          <NavLink to="/boarding">Add Boarding</NavLink>
          <NavLink to="/break">Add Break</NavLink>
          <NavLink to="/">Show Cards</NavLink>
        </NavList>
      </nav>
    </Footer>
  );
}

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #05164d;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  font-size: 16px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ffad00;
  }
`;
