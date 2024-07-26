import React from "react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <div className="flex ">
      <h1>CodeWhispers</h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
