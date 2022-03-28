import React from "react";
import { MaskGroup23, Path, Group9 } from "../images.js";

function MusicPlayer() {
  return (
    <div className="musicPlayer w-[100%] flex flex-col px-5 py-3 mt-5 border-2 border-black rounded-xl bg-[#232A4E] z-[3]">
      <div className="upperPart flex items-center justify-between">
        <div className="profile flex">
          <img
            src={MaskGroup23}
            alt=""
            className="w-[2.5rem] h-[2.5rem] border-2 border-white rounded-full "
          />
          <div className="details flex flex-col ml-4">
            <span className="text-[1rem]">Tristam Bone Dry</span>
            <span className="text-sm text-gray-500">Unknown Artist</span>
          </div>
        </div>
        <div>
          <img src={Path} alt="triple dot" className="h-[1rem]" />
        </div>
      </div>
      <div className="lowerPart">
        <div className="track flex flex-[2] justify-between items-center text-sm text-gray-500 ">
          <span>2:30</span>
          <img src={Group9} alt="Music Equalizer" className="w-[16rem]" />
          <span>4:30</span>
        </div>
        <div className="controls flex flex-1 items-center justify-around">
          <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442">
            <path
              d="M62.208,5.066,69.119.334A1.687,1.687,0,0,1,70.027,0c.517,0,.836.415.836,1.109V11.334c0,.693-.319,1.107-.835,1.107a1.673,1.673,0,0,1-.9-.335L62.211,7.376A1.419,1.419,0,0,1,61.52,6.22,1.414,1.414,0,0,1,62.208,5.066Z"
              transform="translate(-61.52 0)"
              fill="#4b537b"
            />
            <rect
              id="Rectangle_15"
              data-name="Rectangle 15"
              width="1"
              height="12"
              rx="0.5"
              transform="translate(0.432 0.221)"
              fill="#4b537b"
            />
          </svg>
          <div className="pauseButton flex items-center relative">
            <svg width="40" height="40" viewBox="0 0 40 40">
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="0.5"
                  x2="0.5"
                  y2="1"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f2061d" />
                  <stop offset="1" stop-color="#e600fe" />
                </linearGradient>
              </defs>
              <path
                id="Subtraction_1"
                data-name="Subtraction 1"
                d="M-2018-1015a19.87,19.87,0,0,1-14.142-5.858A19.869,19.869,0,0,1-2038-1035a19.869,19.869,0,0,1,5.858-14.142A19.869,19.869,0,0,1-2018-1055a19.869,19.869,0,0,1,14.142,5.858A19.869,19.869,0,0,1-1998-1035a19.869,19.869,0,0,1-5.858,14.142A19.869,19.869,0,0,1-2018-1015Zm0-39a19.021,19.021,0,0,0-19,19,19.021,19.021,0,0,0,19,19,19.021,19.021,0,0,0,19-19A19.021,19.021,0,0,0-2018-1054Z"
                transform="translate(2038 1055)"
                fill="url(#linear-gradient)"
              />
            </svg>
            <svg
              width="12.327"
              height="16.417"
              viewBox="0 0 12.327 16.417"
              className="absolute left-[0.85rem]"
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="2.686"
                  y1="0.162"
                  x2="0"
                  y2="1.074"
                  gradientUnits="objectBoundingBox"
                >
                  <stop offset="0" stop-color="#f2061e" />
                  <stop offset="1" stop-color="#e600fd" />
                </linearGradient>
              </defs>
              <rect
                id="Rectangle_12"
                data-name="Rectangle 12"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(0)"
                fill="url(#linear-gradient)"
              />
              <rect
                id="Rectangle_13"
                data-name="Rectangle 13"
                width="3.625"
                height="16.417"
                rx="1.813"
                transform="translate(8.701)"
                fill="url(#linear-gradient)"
              />
            </svg>
          </div>
          <svg width="10.455" height="12.442" viewBox="0 0 10.455 12.442">
            <path
              id="Path_3"
              data-name="Path 3"
              d="M70.175,5.066,63.264.334A1.687,1.687,0,0,0,62.356,0c-.517,0-.836.415-.836,1.109V11.334c0,.693.319,1.107.835,1.107a1.673,1.673,0,0,0,.9-.335l6.914-4.731a1.419,1.419,0,0,0,.691-1.155A1.414,1.414,0,0,0,70.175,5.066Z"
              transform="translate(-61.52 0)"
              fill="#4b537b"
            />
            <rect
              id="Rectangle_14"
              data-name="Rectangle 14"
              width="1"
              height="12"
              rx="0.5"
              transform="translate(9.455 0.221)"
              fill="#4b537b"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
