import { findByLabelText } from "@testing-library/react";
import * as React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  let activeStyle = {
    textDecoration: "none",
  };

  let activeClassName = "none";

  return (
    <nav>
      <ul>
        <li>
          <NavLink className="list" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="list" to="/About">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="list" to="/Users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink className="list" to="/SignIn">
            Sign in
          </NavLink>
        </li>
        <li>
          <NavLink className="list" to="/Errortest">
            Error Test
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
