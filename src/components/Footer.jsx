import React from "react";
import {
  YouTube,
  Instagram,
  Twitter,
  Facebook,
  LinkedIn,
} from "@material-ui/icons";
import CenterMenu from "./CenterMenu";

function Footer() {
  const SocialStyle =
    "p-2 mr-[5rem] border-2 border-white rounded-full transition duration-500 hover:scale-125 hover:cursor-pointer";

  return (
    <div className="footer relative flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[35rem] pt-[18rem] mt-[-10rem] z-[1]">
      <CenterMenu />
      <div className="flex w-[100%] justify-center mt-14">
        <div className={SocialStyle + ` hover:bg-[#FF0000]`}>
          <YouTube />
        </div>
        <div className={SocialStyle + ` hover:bg-[#E4405F]`}>
          <Instagram />
        </div>
        <div className={SocialStyle + ` hover:bg-[#1DA1F2]`}>
          <Twitter />
        </div>
        <div className={SocialStyle + ` hover:bg-[#1877F2]`}>
          <Facebook />
        </div>
        <div className={SocialStyle + ` hover:bg-[#0A66C2]`}>
          <LinkedIn />
        </div>
      </div>
      <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[4rem] ">
        Designed By : <b>Edi</b>
      </span>
    </div>
  );
}

export default Footer;
