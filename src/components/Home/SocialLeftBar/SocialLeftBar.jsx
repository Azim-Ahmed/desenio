import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../../assets/images/user.png";
import young1 from "../../../assets/images/young-1.png";
import young2 from "../../../assets/images/young-2.png";
import young3 from "../../../assets/images/young-3.png";
import young4 from "../../../assets/images/young-4.png";
import young5 from "../../../assets/images/young-5.png";
import datingIcon from "../../../assets/images/dating.svg";
import HangoutSvg from "./../../../components/Shared/Svg/HangoutSvg";
import MeetingSvg from "./../../../components/Shared/Svg/MeetingSvg";
import MomentSvg from "./../../../components/Shared/Svg/MomentSvg";
import NetworkSvg from "./../../../components/Shared/Svg/NetworkSvg";
import PlaySvg from "./../../../components/Shared/Svg/PlaySvg";
import SettingSvg from "./../../../components/Shared/Svg/SettingSvg";
import ViralSvg from "./../../../components/Shared/Svg/ViralSvg";
import EditSvg from "./../../../components/Shared/Svg/EditSvg";
import { Link } from "react-router-dom";
import ProfilePicture from "components/Shared/ProfilePicture/ProfilePicture";
import { useGetProfileQuery } from "features/profile/profileApi";

const SocialLeftBar = () => {
  const { data, isFetching } = useGetProfileQuery();
  const navigate = useNavigate();

  const goto = (path) => {
    navigate(path);
  };

  return (
    <div>
      {/* left-sidebar-part-1 */}
      <div className="px-2 py-4 mb-4 bg-white text-black rounded-sm shadow-md dark:bg-gray-800 dark:text-white">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            {/* <img className="w-10 rounded-md" src={user} alt="" /> */}
            <ProfilePicture
              data={data}
              isFetching={isFetching}
              width={45}
              height={45}
            />
            <div>
              <Link
                to="/profile"
                className="text-[14px] leading-none text-black font-bold dark:bg-gray-800 dark:text-white"
              >
                {data?.data.name || "username"}
              </Link>
              <span className=" block text-[10px] text-gray leading-none dark:bg-gray-800 dark:text-gray-400">
                Founder of CIC
              </span>
            </div>
          </div>
          <EditSvg />
        </div>

        <div className="flex justify-center items-center text-center gap-4 py-5 text-black dark:bg-gray-800 dark:text-white">
          <div className="">
            <h6 className="text-[14px] mb-1">46</h6>
            <p className="text-[12px]">Post</p>
          </div>
          <div className="">
            <h6 className="text-[14px] mb-1">88</h6>
            <p className="text-[12px]">Meeting</p>
          </div>
          <div className="">
            <h6 className="text-[14px] mb-1">12k</h6>
            <p className="text-[12px]">Following</p>
          </div>
        </div>
        <Link
          to="/profile"
          className="btn btn-sm rounded-md bg-[#000000] hover:bg-[#000000] text-center w-[100%] text-[12px] normal-case"
        >
          My Profile
        </Link>
      </div>

      {/* left-sidebar-part-2 */}
      <div class="mb-4 px-2 py-4 bg-[#ffffff]  shadow-md rounded-sm">
        <h6 className="text-[14px] font-medium mb-4 text-[#444]">
          Key Features
        </h6>
        {/* <div className="flex items-center gap-3 mb-4">
          <NetworkSvg />
          <p className="text-[16px] text-[#414141]">Social</p>
        </div> */}
        <div className="flex items-center gap-3 mb-4">
          <NetworkSvg />
          <Link to="/earning_history" className="text-[16px] text-[#414141] no-underline">Earning History </Link>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <PlaySvg />
          <p className="text-[16px] text-[#414141]">Play</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <MeetingSvg />
          <Link to="/meet" className="text-[16px] text-[#414141] no-underline">
            Meeting
          </Link>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <HangoutSvg />
          <p className="text-[16px] text-[#414141]">Hangout</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <MomentSvg />
          <p className="text-[16px] text-[#414141]">Moment</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <ViralSvg />
          <p className="text-[16px] text-[#414141]">Viral</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <SettingSvg />
          <p className="text-[16px] text-[#414141]">Settings</p>
        </div>
        <Link
          className="flex items-center gap-3 mb-4 text-inherit"
          to="/dating"
        >
          <img src={datingIcon} alt="dating icon" />
          <p className="text-[16px] text-[#414141]">Dating</p>
        </Link>
      </div>

      {/* left-sidebar-part-3 */}
      <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
        <div className="flex justify-between items-center mb-4">
          <h6 className="text-[14px] font-medium text-[#8F8F8F]">
            Connected Friend
          </h6>
          <span className="text-[12px] text-[#76A2CB]">See all</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img className="rounded-md" src={young1} alt="" />
          <p className="text-[16px] text-[#000000]">Spike Spiegel</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img className="rounded-md" src={young2} alt="" />
          <p className="text-[16px] text-[#000000]">Kushina Uzumak</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img className="rounded-md" src={young3} alt="" />
          <p className="text-[16px] text-[#000000]">Shinobu Oshino</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img className="rounded-md" src={young4} alt="" />
          <p className="text-[16px] text-[#000000]">Hitagi Senjougahara</p>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <img className="rounded-md" src={young5} alt="" />
          <p className="text-[16px] text-[#000000]">Hisoka</p>
        </div>
      </div>
    </div>
  );
};

export default SocialLeftBar;
