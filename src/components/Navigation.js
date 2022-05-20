import React from "react";
import { NavLink, StyledLink, NavList } from "../styling/StylingNavigation";

export default function Navigation() {
  return (
    <NavLink>
      <NavList role="list">
        <StyledLink to="/checkin">Add CheckIn</StyledLink>
        <StyledLink to="/boarding">Add Boarding</StyledLink>
        <StyledLink to="/break">Add Break</StyledLink>
        <StyledLink to="/">Show Cards</StyledLink>
      </NavList>
    </NavLink>
  );
}
