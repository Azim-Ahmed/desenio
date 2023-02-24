import { useState } from "react";
import { Link } from "react-router-dom";
import CameraSvg from "../../components/Shared/Svg/CameraSvg";
import EditSvg from "../../components/Shared/Svg/EditSvg";
import HangoutSvg from "../../components/Shared/Svg/HangoutSvg";
import ImageSvg from "../../components/Shared/Svg/ImageSvg";
import MeetingSvg from "../../components/Shared/Svg/MeetingSvg";
import MomentSvg from "../../components/Shared/Svg/MomentSvg";
import NetworkSvg from "../../components/Shared/Svg/NetworkSvg";
import PlusSvg from "../../components/Shared/Svg/PlusSvg";
import PollSvg from "../../components/Shared/Svg/PollSvg";
import SettingSvg from "../../components/Shared/Svg/SettingSvg";
import VideoPlaySvg from "../../components/Shared/Svg/VideoPlaySvg";
import VideoSvg from "../../components/Shared/Svg/VideoSvg";
import ViralSvg from "../../components/Shared/Svg/ViralSvg";
import "./profile.css";

import { useGetProfileQuery } from "features/profile/profileApi";
import young1 from "../../assets/images/young-1.png";
import young2 from "../../assets/images/young-2.png";
import young3 from "../../assets/images/young-3.png";
import young4 from "../../assets/images/young-4.png";
import young5 from "../../assets/images/young-5.png";
import ChangeCoverPhoto from "../../components/Profile/ChangeCoverPhoto";
import ChangeProfilePic from "../../components/Profile/ChangeProfilePic";
import Posts from "../../components/Profile/Posts";
import CoverPhoto from "../../components/Shared/ProfilePicture/CoverPhoto";
import ProfilePicture from "../../components/Shared/ProfilePicture/ProfilePicture";
import WritePost from "../../components/Shared/WritePost/WritePost";
import Friends from "components/Profile/Friends";

export default function Profile() {
  // const [loading, setLoading] = useState(false);

  const { data, isFetching, isLoading } = useGetProfileQuery();

  const [isOpenWritePost, setIsOpenWritePost] = useState(false);
  const [isOpenChangeProfilePic, setIsOpenChangeProfilePic] = useState(false);
  const [isOpenChangeCoverPhoto, setIsOpenChangeCoverPhoto] = useState(false);

  const handleCloseWritePost = () => {
    setIsOpenWritePost(false);
  };
  const handleCloseChangeProfilePic = () => {
    setIsOpenChangeProfilePic(false);
  };
  const handleCloseChangeCoverPhoto = () => {
    setIsOpenChangeCoverPhoto(false);
  };

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const {
    name,
    avatar,
    cover_photo,
    followers,
    following,
    post_comment,
    total_post,
    post_view,
    post_share,
    post_like,
  } = data?.data || {};

  return (
    <div className="mt-[75px]">
      <WritePost open={isOpenWritePost} onClose={handleCloseWritePost} />
      <ChangeProfilePic
        open={isOpenChangeProfilePic}
        onClose={handleCloseChangeProfilePic}
      />
      <ChangeCoverPhoto
        open={isOpenChangeCoverPhoto}
        onClose={handleCloseChangeCoverPhoto}
      />
      <div className="px-8 py-6 ">
        <div class="grid grid-cols-7 gap-6 relative">
          {/* ---left-side-bar-start--- */}
          <div class="col-span-2 overflow-y-auto sticky top-0 ">
            <div className="p-5 mb-4 bg-[#FFFFFF] shadow-md rounded-lg">
              <div className="flex justify-between">
                <div className="flex gap-3">
                  <ProfilePicture
                    width={74}
                    height={70}
                    // data={data}
                    // isFetching={isFetching}
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
                <p className="text-[16px] text-[#000000]">
                  Hitagi Senjougahara
                </p>
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
            <div className="mb-4 bg-[#FFFFFF] shadow-sm rounded-sm overflow-hidden">
              <div className="relative mb-10 rounded-sm cover h-96">
                <CoverPhoto onClick={() => setIsOpenChangeCoverPhoto(true)} />
                {/* <div
                  className="absolute overflow-hidden bg-red-200 rounded-lg cursor-pointer"
                  style={{
                    backgroundImage: `url("https://dummyimage.com/1110x308/000000/0011ff")`,
                    backgroundSize: "cover",
                    inset: 0,
                  }}
                  onClick={() => setIsOpenChangeCoverPhoto(true)}
                /> */}
                <div className="absolute bottom-[-24px] px-10 flex justify-between left-0 right-0">
                  <div className="absolute bottom-0 p-2 border-2 border-yellow-300 border-dashed pro-pic">
                    <ProfilePicture
                      width={156}
                      height={156}
                      // data={data}
                      // isFetching={isFetching}
                    />
                    <div
                      onClick={() => setIsOpenChangeProfilePic(true)}
                      className="camera absolute p-1 rounded-sm right-[-16px] bottom-4 bg-white cursor-pointer"
                    >
                      <CameraSvg />
                    </div>
                  </div>

                  <div className="flex gap-4 ml-auto">
                    <button className="flex items-center p-4 bg-white rounded-md shadow-sm">
                      <div className="p-1 mr-2 bg-yellow-300 rounded-full">
                        <PlusSvg />
                      </div>
                      Add Story
                    </button>
                    <button className="flex items-center p-4 bg-white rounded-md shadow-sm">
                      Edit Profile
                    </button>
                  </div>
                </div>
              </div>
              {/* links start */}
              <div className="px-8 py-4">
                <div className="flex gap-24 overflow-x-auto">
                  <h2 className="pb-6 font-bold text-yellow-300 border-b-4 border-yellow-300 border-solid cursor-pointer">
                    Post
                  </h2>
                  <h2 className="pb-6 font-bold cursor-pointer">About</h2>
                  <h2 className="pb-6 font-bold cursor-pointer">Friends</h2>
                  <h2 className="pb-6 font-bold cursor-pointer">Photos</h2>
                  <h2 className="pb-6 font-bold cursor-pointer">Videos</h2>
                  <h2 className="pb-6 font-bold cursor-pointer">Meeting</h2>
                  <h2 className="pb-6 font-bold cursor-pointer">More</h2>
                </div>
              </div>
              {/* links end */}
            </div>
            {/* header end */}

            {/* write a post */}
            <div className="p-4 bg-white rounded-md shadow-sm">
              <div className="flex gap-4">
                <div>
                  <ProfilePicture
                    width={60}
                    height={55}
                    // data={data}
                    // isFetching={isFetching}
                  />
                </div>
                <div className="flex flex-col gap-6 grow">
                  <p
                    type="text"
                    className="px-8 border border-solid py-4 rounded-md bg-[#F7F7F7] text-[#8F8F8F]"
                    placeholder=""
                    onClick={() => setIsOpenWritePost(true)}
                  >
                    Tell your friend about your thought
                  </p>
                  <div className="flex justify-between">
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <VideoSvg /> Live Video
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <ImageSvg /> Image
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <VideoPlaySvg /> Video
                    </button>
                    <button className="flex gap-4 items-center justify-center h-[45px] w-[220px] bg-[#F7F7F7] rounded-md">
                      <PollSvg /> Poll
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* write a post end */}

            {/* posted status */}
            <Posts />
            {/* posted status end */}
            {/* <Friends /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
