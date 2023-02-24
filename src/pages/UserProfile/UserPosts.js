import { Link, useParams } from "react-router-dom";
import EditSvg from "../../components/Shared/Svg/EditSvg";
import HangoutSvg from "../../components/Shared/Svg/HangoutSvg";
import MeetingSvg from "../../components/Shared/Svg/MeetingSvg";
import MomentSvg from "../../components/Shared/Svg/MomentSvg";
import NetworkSvg from "../../components/Shared/Svg/NetworkSvg";
import SettingSvg from "../../components/Shared/Svg/SettingSvg";
import VideoPlaySvg from "../../components/Shared/Svg/VideoPlaySvg";
import ViralSvg from "../../components/Shared/Svg/ViralSvg";
import "./profile.css";

import { useGetUserDataQuery } from "features/user/userApi";
import young1 from "../../assets/images/young-1.png";
import young2 from "../../assets/images/young-2.png";
import young3 from "../../assets/images/young-3.png";
import young4 from "../../assets/images/young-4.png";
import young5 from "../../assets/images/young-5.png";
import StaticProfilePicture from "../../components/Shared/StaticProfilePicture/StaticProfilePicture";

export default function UserPosts() {
  const { id } = useParams();
  const { data, isLoading } = useGetUserDataQuery(id);
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const {
    followers,
    following,
    post_comment,
    total_post,
    post_view,
    post_share,
    post_like,
    name,
    avatar,
  } = data?.data || {};

  return (
    <div className="py-4">
      <div class="grid grid-cols-7 gap-6 relative">
        {/* ---left-side-bar-start--- */}
        <div class="col-span-2 overflow-y-auto sticky top-0 ">
          <div className="p-5 mb-4 bg-[#FFFFFF] shadow-md rounded-lg">
            <div className="flex justify-between">
              <div className="flex gap-3">
                <StaticProfilePicture
                  width={74}
                  height={70}
                  isLoading={isLoading}
                  src={avatar}
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-lg font-bold">{name}</h3>
                  <h5 className="font-light text-gray-400">Sub title</h5>
                </div>
              </div>
              <EditSvg />
            </div>

            <div className="grid mt-3 activity-graph">
              <h6>Post</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[10%] bg-yellow-300"></div>
              </div>
              <h6>{total_post}</h6>

              <h6>Post View</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[20%] bg-yellow-300"></div>
              </div>
              <h6>{post_view}</h6>

              <h6>Post Share</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[60%] bg-yellow-300"></div>
              </div>
              <h6>{post_share}</h6>

              <h6>Post Like</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[30%] bg-yellow-300"></div>
              </div>
              <h6>{post_like}</h6>

              <h6>Post Comment</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[70%] bg-yellow-300"></div>
              </div>
              <h6>{post_comment}</h6>

              <h6>Followers</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[40%] bg-yellow-300"></div>
              </div>
              <h6>{followers}</h6>

              <h6>Following</h6>
              <div className="flex w-full h-2 overflow-hidden bg-gray-200 rounded-full">
                <div className="w-[10%] bg-yellow-300"></div>
              </div>
              <h6>{following}</h6>
            </div>
          </div>

          {/* key features */}
          <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
            <h6 className="text-[14px] font-medium mb-3 text-[#444]">
              Key Features
            </h6>
            <div className="flex items-center gap-3 mb-3">
              <NetworkSvg />
              <p className="text-[16px] text-[#414141]">Social</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <VideoPlaySvg />
              Play{" "}
            </div>
            <div className="flex items-center gap-3 mb-3">
              <MeetingSvg />
              <Link
                to="/meet"
                className="text-[16px] text-[#414141] no-underline"
              >
                Meeting
              </Link>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <HangoutSvg />
              <p className="text-[16px] text-[#414141]">Hangout</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <MomentSvg />
              <p className="text-[16px] text-[#414141]">Moment</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <ViralSvg />
              <p className="text-[16px] text-[#414141]">Viral</p>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <SettingSvg />
              <p className="text-[16px] text-[#414141]">Settings</p>
            </div>
          </div>
          {/* key features end */}

          {/* connected friends */}
          <div class="mb-4 px-2 py-4 bg-[#FFFFFF] shadow-md rounded-sm">
            <div className="flex items-center justify-between mb-4">
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
          {/* connected friends end */}
        </div>
        {/* ---left-sidebar-end--- */}

        {/* main content */}
        <div className="col-span-5">
          {/* header start */}

          {/* header end */}

          {/* posted status */}
          {/* <Posts /> */}
          {/* posted status end */}
        </div>
      </div>
    </div>
  );
}
