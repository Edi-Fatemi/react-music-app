import { useState } from "react";
import MusicPlayer from "./MusicPlayer";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
import {
  BackgroundGraphics,
  D1,
  D2,
  D3,
  D4,
  SearchIcon,
  Path318,
} from "../images.js";

function Search() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "-44rem",
    },
    false: {
      left: "-50rem",
    },
  };
  const redimg = {
    true: {
      left: "18rem",
    },
    false: {
      left: "16rem",
    },
  };
  const musicimg = {
    true: {
      left: "2rem",
    },
    false: {
      left: "6rem",
    },
  };

  return (
    <div className="search relative h-[64rem] flex items-center justify-between px-[5rem] pt-[18rem] pb-[10rem] mt-[-15rem] rounded-b-[5rem] bg-[#081730] z-[3] ">
      <div className="left flex-1">
        <motion.img
          variants={bg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={BackgroundGraphics}
          alt=""
          className="absolute top-[22rem] left-[-47rem] "
        />
        <motion.img
          src={D1}
          alt=""
          className="absolute w-[16rem] top-[26rem]"
        />
        <motion.img
          src={D2}
          alt=""
          className="absolute w-[9rem] top-[32.7rem] left-[7rem] "
        />
        <motion.img
          variants={redimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1.2,
            type: "ease-out",
          }}
          src={D3}
          alt=""
          className="absolute w-[9rem] top-[33rem] left-[17rem] "
        />
        <motion.img
          variants={musicimg}
          animate={`${elementIsVisible}`}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          src={D4}
          alt=""
          className="absolute w-[17rem] top-[50rem] left-[2rem] "
        />
      </div>

      <div className="right h-[100%] flex flex-1 flex-col items-start justify-start pt-[9rem] ">
        <div className="searchbar w-[100%] flex justify-start">
          <input
            type="text"
            placeholder="Enter the Keyword or URL"
            className="h-[3rem] flex-[19] p-3 outline-offset-[20px] rounded-xl bg-[#020917] transition-outline hover:bg-[#02091799] focus:bg-[#02091799] focus:outline focus:outline-sky-400 focus:outline-offset-[0]  duration-300"
          />
          <div className="searchIcon h-[3rem] flex flex-1 items-center ml-4 p-4 rounded-xl bg-gradient-to-bl from-[#F3071D] to-[#E600FF] hover:cursor-pointer ">
            <img
              src={SearchIcon}
              alt="search"
              className="w-[1.5rem] transition duration-300 hover:scale-150"
            />
          </div>
        </div>

        <div className="tild w-[100%] flex items-center justify-start my-7 ">
          <img src={Path318} alt="" className="w-[5rem]" />
        </div>

        <div className="detail flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        <VisibilitySensor
          onChange={(isVisible) => setElementIsVisible(isVisible)}
        >
          <MusicPlayer />
        </VisibilitySensor>
      </div>
    </div>
  );
}

export default Search;
