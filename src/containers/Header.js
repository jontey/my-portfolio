import React, { Component } from "react";

import HeaderItems from "../components/HeaderItems";

const Header = ({ sections }) => {
  return (
    <header
      style={{ backgroundColor: "#12171a", border: 0 }}
      className="sticky"
    >
      {sections.map((section) => HeaderItems({ ...section }))}
    </header>
  );
};

export default Header;
