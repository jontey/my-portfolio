import React, { Component } from "react";

import HeaderItems from "../components/HeaderItems";

const Header = ({ sections }) => {
  return (
    <header
      className="main-header"
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
