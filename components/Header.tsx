import React from "react";
import { ThemeToggle } from "./theme-toggle";

const Header = () => {
  return (
    <div className="flex w-full justify-between align-center p-3">
      <h1 className="text-xl tracking-wider">
        Code<span className="text-slate-300 ">Whispers</span>
      </h1>
      <ThemeToggle />
    </div>
  );
};

export default Header;
