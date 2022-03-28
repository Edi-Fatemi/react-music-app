import React from "react";

function CenterMenu() {
  const liStyle =
    "relative mr-[3rem] text-[1rem] font-semibold hover:cursor-pointer before:absolute  before:h-[0.1rem]  before:w-[100%] before:bg-sky-500 before:bottom-[0] before:left-[0] before:translate-x-[-100%] overflow-hidden before:hover:translate-x-[0] before:hover:transition-transform durtion-300 ";

  return (
    <div className="menu flex">
      <ul className="flex w-[100%] h-[2rem] justify-between">
        <li className={liStyle}>Home</li>
        <li className={liStyle}>About</li>
        <li className={liStyle}>Performer</li>
        <li className={liStyle}>Event Schedule</li>
      </ul>
    </div>
  );
}

export default CenterMenu;
