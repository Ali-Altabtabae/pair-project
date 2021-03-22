import React from "react";
import { Link } from "react-router-dom";
import { NavbarButton } from "../styles";

const Navbar = (props) => {
  return (
    <Link to={`/${props.element}`}>
      <NavbarButton>{props.element}</NavbarButton>
    </Link>
  );
};

export default Navbar;
