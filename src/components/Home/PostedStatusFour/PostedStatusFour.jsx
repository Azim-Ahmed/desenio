import React from "react";
import { Link } from "react-router-dom";
import postTimeline from "../../../assets/images/post-timeline.png";
import threeDot from "../../../assets/images/theedot.png";
import video2 from "../../../assets/images/thumsup-man.png";
import video1 from "../../../assets/images/thumsup-woman.png";
import young4 from "../../../assets/images/young-5.png";
import YellowPoint from "../../../components/Shared/Svg/YellowPoint";
import NavigationSvg from "../../Shared/Svg/NavigationSvg";
import AddCommentSvg from "./../../../components/Shared/Svg/AddCommentSvg";
import AddImageSvg from "./../../../components/Shared/Svg/AddImageSvg";
import AddVideoSvg from "./../../../components/Shared/Svg/AddVideoSvg";
import LoveReactSvg from "./../../../components/Shared/Svg/LoveReactSvg";
import SoundOffSvg from "./../../Shared/Svg/SoundOffSvg";
import SoundOnSvg from "./../../Shared/Svg/SoundOnSvg";
import PlaySvgAnim from "./../../Shared/Svg/PlaySvgAnim";

const PostedStatusFour = () => {
  return (
    <div>
      {/* news-feeds-part */}
      <div className="mb-4 p-4 bg-[#FFFFFF] rounded-md shadow-md">
        <div>
          <div className="flex gap-2 mb-4">
            <img
              className="w-[50px] h-[50px] rounded-lg"
              src={young4}
              alt="user image"
            />
            <div className="my-auto">
              <h6 className="text-[#000000] text-[16px] leading-6">Hisoka</h6>
              <div className="flex items-center gap-2">
                <p className="text-[#8F8F8F] text-[12px]">Founder of cic</p>
                <p className="ml-6">
                  {" "}
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
            <div className="relative">
              <img
                src={video1}
                className="rounded-md w-full"
                alt="timeline posted image"
              />
              <div className="text-[#FFFFFF] absolute bottom-3 right-3">
                <SoundOnSvg />
              </div>

              <div className="absolute top-[40%] left-[40%]">
                <div class="relative">
                  <div class="md:w-[80px] sm:w-[50px] xs:w-[30px] md:h-[80px] sm:h-[50px] xs:h-[30px] rounded-lg shadow-2xl ">
                    {/* <PlaySvgAnim /> */}
                  </div>
                  <div class="absolute top-0 right-0 md:w-[80px] sm:w-[50px] xs:w-[30px] md:h-[80px] sm:h-[50px] xs:h-[30px] rounded-full bg-[#FFD700B0] animate-ping"></div>
                  <div class="absolute flex items-center justify-center top-0 right-0 md:w-[80px] sm:w-[50px] xs:w-[30px] md:h-[80px] sm:h-[50px] xs:h-[30px] rounded-full cursor-pointer bg-[#FFD700B0]">
                    <PlaySvgAnim />
                  </div>
                </div>
              </div>

              {/* <div className="text-[#FFFFFF] absolute top-48 left-40  bg-[#FFD700B0] w-[80px] h-[80px] rounded-full flex items-center justify-center">
                <PlaySvgAnim />
                
                <div class="absolute top-0 right-0 w-[100%] h-[100%] rounded-full bg-[#FFD700B0] animate-ping"></div>
              <div class="absolute flex items-center justify-center top-0 right-0 w-[100%] h-[100%] rounded-full bg-[#FFD700B0]">
              <PlaySvgAnim />
              </div>
              </div>  */}
            </div>

            <div className="relative">
              <img
                src={video2}
                className="rounded-md w-full"
                alt="timeline posted image"
              />
              <div className="text-[#FFFFFF] absolute bottom-3 right-3">
                <SoundOffSvg />
              </div>
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

export default PostedStatusFour;
