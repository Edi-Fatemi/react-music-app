import React from "react";
import { MuzicLogo } from "../images.js";
import CenterMenu from "./CenterMenu";
function Header() {
  const buttonStyle =
    "px-[25px] py-[7px] border-[2px] border-[#232A4E] rounded-[10px]";

  return (
    <div className="header flex items-center justify-between px-[5rem] pt-[2.4rem] text-[0.8rem] bg-[#081730]">
      <img
        src={MuzicLogo}
        alt="Website Logo"
        className="logo w-[42px] h-[42px]"
      />
      <CenterMenu />
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          sign up
        </button>
        <button className={`bg-[#232A4E] ` + buttonStyle}>Log in</button>
      </div>
    </div>
  );
}

export default Header;
