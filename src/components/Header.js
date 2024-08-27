import React from "react";
import HorizontalMenu from "./HorizontalMenu";
import HamburgerMenu from "./HamburgerMenu";

const Header = ({ onToggleView }) => {
  return (
    <header className="flex justify-between items-center py-4">
      <HamburgerMenu />
      <HorizontalMenu />
    </header>
  );
};

export default Header;
