import React from "react";
import { AppStore, GooglePlay } from "../images.js";
function DownloadAds() {
  const downloadImgStyle =
    "w-[10rem] h-[3rem] border-[2px] border-[#232A4E] rounded-[13px] cursor-pointer ";

  return (
    <div className="download">
      <div className="download_images flex">
        <img
          className={`mr-[2rem] ` + downloadImgStyle}
          src={AppStore}
          alt="App Store"
        />
        <img className={downloadImgStyle} src={GooglePlay} alt="Google Play" />
      </div>
    </div>
  );
}

export default DownloadAds;
