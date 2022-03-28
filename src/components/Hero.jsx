import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import { motion } from "framer-motion";
import DownloadAds from "./DownloadAds";
import { BackgroundGraphics, P1, P2, P3, P4 } from "../images.js";

function Hero() {
  const [elementIsVisible, setElementIsVisible] = useState(false);
  const bg = {
    true: {
      left: "7rem",
    },
    false: {
      left: "19rem",
    },
  };
  const musicPlayer = {
    true: {
      left: "295px",
    },
    false: {
      left: "235px",
    },
  };
  const rect = {
    true: {
      left: "11rem",
    },
    false: {
      left: "13rem",
    },
  };
  const heart = {
    true: {
      left: "9rem",
    },
    false: {
      left: "12.5rem",
    },
  };

  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={300}
    >
      <div className="wrapper relative w-[100%] h-[35rem] flex items-center justify-between px-[5rem] rounded-b-[5rem] bg-[#081730] z-[5] ">
        <div className="headings h-[100%] flex items-start justify-center flex-col text-[3rem] ">
          <span>Experience The</span>
          <span>
            <b>Best Quality Music</b>
          </span>
          <span className="text-[15px] text-[#525D6E]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Lorem ipsum dolor sit amet consectetur.
          </span>
          <div>
            <span className="text-[13px]">Download now on IOS and Android</span>
          </div>
          <DownloadAds />
        </div>
        <div className="images relative w-[50%]">
          <motion.img
            variants={bg}
            animation={`${elementIsVisible}`}
            transition={{ duration: 1, type: "ease-out" }}
            src={BackgroundGraphics}
            alt="Main background"
            className=" absolute top-[-8rem] left-[19rem] "
          />
          <img
            src={P1}
            alt=""
            className="absolute h-[34rem] top-[-15rem] left-[13rem] "
          />
          <motion.img
            variants={musicPlayer}
            animate={`${elementIsVisible}`}
            transition={{
              duration: 1,
              type: "ease-out",
            }}
            src={P2}
            alt=""
            className="absolute w-[175px] top-[94px] left-[235px]"
          />
          <motion.img
            variants={rect}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={P3}
            alt=""
            className="absolute w-[5rem] top-[12rem] left-[13rem]"
          />
          <motion.img
            variants={heart}
            animate={`${elementIsVisible}`}
            transition={{
              type: "ease-out",
              duration: 1,
            }}
            src={P4}
            alt=""
            className="absolute w-[5rem] top-[12rem] left-[12.5rem]"
          />
        </div>
      </div>
    </VisibilitySensor>
  );
}

export default Hero;
