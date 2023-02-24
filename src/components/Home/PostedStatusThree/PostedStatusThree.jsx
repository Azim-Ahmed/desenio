import React from "react";
import { Link } from "react-router-dom";
import postTimeline from "../../../assets/images/post-timeline.png";
import threeDot from "../../../assets/images/theedot.png";
import postTimelineImage from "../../../assets/images/timeline-postImage.png";
import poster from "../../../assets/images/young-1.png";
import girl1 from "../../../assets/images/photoshoot-girl-1.png";
import girl2 from "../../../assets/images/photoshoot-girl-2.png";
import girl3 from "../../../assets/images/photoshoot-girl-3.png";
import girl4 from "../../../assets/images/photoshoot-girl-4.png";
import girl5 from "../../../assets/images/photoshoot-girl-5.png";
import YellowPoint from "../../../components/Shared/Svg/YellowPoint";
import NavigationSvg from "../../Shared/Svg/NavigationSvg";
import AddCommentSvg from "./../../../components/Shared/Svg/AddCommentSvg";
import AddImageSvg from "./../../../components/Shared/Svg/AddImageSvg";
import AddVideoSvg from "./../../../components/Shared/Svg/AddVideoSvg";
import LoveReactSvg from "./../../../components/Shared/Svg/LoveReactSvg";

const PostedStatusThree = () => {
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
              <h6 className="text-[#000000] text-[16px] leading-6">
                Hitagi Senjougahara
              </h6>
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
            <img
              src={girl1}
              className="rounded-md w-full"
              alt="timeline posted image"
            />
            <img
              src={girl2}
              className="rounded-md w-full"
              alt="timeline posted image"
            />
            <img
              src={girl3}
              className="rounded-md w-full"
              alt="timeline posted image"
            />
            <div className="flex gap-2 relative">
              <img
                src={girl4}
                className="rounded-md  overflow-x-hidden w-full"
                alt="timeline posted image"
              />

              <img
                src={girl5}
                className="rounded-md  overflow-x-hidden bg-blend-darken w-full"
                alt="timeline posted image"
              />
              <h4 className="absolute top-[50%]  text-3xl right-[22%] text-[#ffffff]">
                +5
              </h4>
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

export default PostedStatusThree;
