import React, { Component } from "react";

import HeaderItems from "../components/HeaderItems";

const Header = ({ sections }) => {
  return (
    <header
      className="text-center animate-drop-header sticky top-0 z-[999] shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-3 bg-[#12171a] border-none md:py-4"
      role="navigation"
      aria-label="Main navigation"
    >
      <nav className="bg-transparent border-none">
        {sections.map((section) => HeaderItems({ ...section }))}
      </nav>
    </header>
  );
};

export default Header;
