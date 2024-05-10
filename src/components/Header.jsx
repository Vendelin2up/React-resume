import React from "react";
import { NavLink } from "react-router-dom";
import "../components/Header.css";

const Header = ({ links }) => {
  return (
    <header>
      <nav>
        {links.map((link) => (
          <NavLink key={link.name} to={link.path} style={{ marginRight: 10 }}>
            {link.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Header;

// Min återanvändbara komponent. Är med igenom alla sidorna.
