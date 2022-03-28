import React from "react";
import Feature from "./Feature";
import { Path318, Group2, Group4, MusicIcon } from "../images.js";

function Experience() {
  return (
    <div className="experience relative flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] rounded-b-[5rem] z-[4]">
      <img src={Path318} alt="" className="w-[5rem]" />
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>
      <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon={Group2} title="For Live Music" />
        <Feature icon={MusicIcon} title="For Daily Music" />
        <Feature icon={Group4} title="For Artists" />
      </div>
    </div>
  );
}

export default Experience;
