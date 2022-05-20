import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled.nav`
  width: 100%;
  position: fixed;
  buttom: 0;
  border-top: 1px solid black;
  background-color: #05164d;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style-type: none;
`;

const StyledLink = styled(Link)`
  color: #36436f;
  font-size: 14px;
  text-decoration: none;
  padding: 0.5rem;
  color: white;
`;

export { NavLink, NavList, StyledLink };
