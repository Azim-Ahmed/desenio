import React from "react";
import ReelPlaySvg from "./../../Shared/Svg/ReelPlaySvg";

const ReelsSlider = ({ reel }) => {
  const {  videoUrl } = reel;
  return (
    <div className="p-1">
      <div className="relative">
        <div>
          <iframe
            className="rounded-md"
            width="100%"
            height="190px"
            src={videoUrl}
            frameBorder="0"
          ></iframe>
        </div>
        <div className="text-[#FFFFFF] absolute bottom-2 left-2 flex items-center gap-1 text-[12px]">
          <ReelPlaySvg />
          <p>176k</p>
        </div>
      </div>
    </div>
  );
};

export default ReelsSlider;
