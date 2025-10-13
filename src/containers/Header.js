import React, { Component } from "react";

import HeaderItems from "../components/HeaderItems";

const Header = ({ sections }) => {
  return (
    <header
      style={{ backgroundColor: "#12171a", border: 0 }}
      className="sticky"
      role="navigation"
      aria-label="Main navigation"
    >
      <nav>
        {sections.map((section) => HeaderItems({ ...section }))}
      </nav>
    </header>
  );
};

export default Header;
