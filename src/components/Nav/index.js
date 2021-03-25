import React from "react";
import "./style.css";
import { Link } from "../Router";

const Nav = () => (
  <nav>
    <Link class="nav__link" to="/">
      Home
    </Link>
    <Link class="nav__link" to="/">
      Work
    </Link>
    <Link class="nav__link" to="/">
      Style Guide
    </Link>
  </nav>
);

export default Nav;
