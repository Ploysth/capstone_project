import React from "react";
import { NavLink, StyledLink } from "../styling/StylingNavigation";

export default function Navigation() {
  return (
    <NavLink>
      <StyledLink to="/checkin">Add CheckIn</StyledLink>
      <StyledLink to="/">Show Cards</StyledLink>
    </NavLink>
  );
}
