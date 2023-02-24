import React from "react";
import { Link } from "react-router-dom";
import postTimeline from "../../../assets/images/post-timeline.png";
import threeDot from "../../../assets/images/theedot.png";
import postTimelineImage from "../../../assets/images/timeline-postImage.png";
import poster from "../../../assets/images/young-1.png";
import photo1 from "../../../assets/images/brownhair-girl.png";
import photo2 from "../../../assets/images/handsome-cameraman.png";
import photo3 from "../../../assets/images/bus.png";
import YellowPoint from "../../../components/Shared/Svg/YellowPoint";
import NavigationSvg from "../../Shared/Svg/NavigationSvg";
import AddCommentSvg from "./../../../components/Shared/Svg/AddCommentSvg";
import AddImageSvg from "./../../../components/Shared/Svg/AddImageSvg";
import AddVideoSvg from "./../../../components/Shared/Svg/AddVideoSvg";
import LoveReactSvg from "../../Shared/Svg/LoveReactSvg";

const PostedStatusFive = () => {
  return (
    <div>
      {/* news-feeds-part */}
      <div className="mb-4 p-4 bg-[#FFFFFF] rounded-md shadow-md">
        <div>
          <div className="flex gap-2 mb-4">
            <img
              className="w-[50px] h-[50px] rounded-lg"
              src={poster}
              alt="user image"
            />
            <div className="my-auto">
              <h6 className="text-[#000000] text-[16px] leading-6">Hisoka</h6>
              <div className="flex items-center gap-2">
                <p className="text-[#8F8F8F] text-[12px]">Founder of cic</p>
                <p className="ml-6"> 
                  <YellowPoint />
                </p>
                <p className="text-[#FFD700] text-[10px]">1Day ago</p>
              </div>
            </div>
            <img className="w-[15x] h-[5px] ml-auto" src={threeDot} alt="" />
          </div>
          <p className="text-[13px] leading-5 mb-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book{" "}
            <Link to="/#" className="no-underline text-[#0469FF]">
              see more
            </Link>
          </p>
          <div className="grid grid-cols-2 gap-2 mb-4">
            <img
              src={photo1}
              className="rounded-md w-full"
              alt="timeline posted image"
            />
            <div className="flex flex-col justify-between">
              <img
                src={photo3}
                className="rounded-md h-[49%] w-full"
                alt="timeline posted image"
              />
              <img
                src={photo2}
                className="rounded-md h-[49%]  w-full"
                alt="timeline posted image"
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <img
              className="w-[48px] h-[48px] rounded-lg  "
              src={postTimeline}
              alt="user image"
            />
            <div className="bg-[#F7F7F7] w-[100%] before:content-[''] before:absolute before:left-[66px] before:border-8 before:border-transparent before:border-solid before:border-r-[#F7F7F7] py-[4px] px-3  rounded-lg flex items-center gap-2 m-2">
              <input
                className="text-[#8F8F8F]  bg-transparent text-[12px] w-[100%] outline-none border-none focus:ring-0 "
                type="text"
                placeholder="Write your comment"
              />
              <AddVideoSvg />
              <AddImageSvg />
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <LoveReactSvg />
                <p className="text-[14px] text-[#000000]">1.2k</p>
              </div>
              <div className="flex items-center gap-2">
                <AddCommentSvg />
                <p className="text-[14px] text-[#000000]">1.2k</p>
              </div>
              <div className="flex items-center gap-2">
                <NavigationSvg />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostedStatusFive;
