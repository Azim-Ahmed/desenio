import EditProfile from "components/Profile/EditProfile";
import { useGetFriendsQuery } from "features/friends/friendsApi";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import ChangeCoverPhoto from "../components/Profile/ChangeCoverPhoto";
import ChangeProfilePic from "../components/Profile/ChangeProfilePic";
import CoverPhoto from "../components/Shared/ProfilePicture/CoverPhoto";
import ProfilePicture from "../components/Shared/ProfilePicture/ProfilePicture";
import CameraSvg from "../components/Shared/Svg/CameraSvg";
import PlusSvg from "../components/Shared/Svg/PlusSvg";
import UserName from "../components/Shared/UserName/UserName";

export default function ProfileLayout({ children }) {
  const [isOpenChangeCoverPhoto, setIsOpenChangeCoverPhoto] = useState(false);
  const [isOpenChangeProfilePic, setIsOpenChangeProfilePic] = useState(false);
  const { data, isFetching } = useGetFriendsQuery();
  const [open, setOpen] = useState(false);

  const handleCloseChangeProfilePic = () => {
    setIsOpenChangeProfilePic(false);
  };
  const handleCloseChangeCoverPhoto = () => {
    setIsOpenChangeCoverPhoto(false);
  };

  const navClass = ({ isActive }) => {
    const cls = "p-4 pb-6 font-bold cursor-pointer";
    const activeCls =
      "text-yellow-300 border-b-4 border-yellow-300 border-solid";

    if (isActive) return cls + " " + activeCls;

    return cls;
  };

  return (
    <>
      <EditProfile open={open} setOpen={setOpen} />

      <div className="p-4">
        <ChangeProfilePic
          open={isOpenChangeProfilePic}
          onClose={handleCloseChangeProfilePic}
        />
        <ChangeCoverPhoto
          open={isOpenChangeCoverPhoto}
          onClose={handleCloseChangeCoverPhoto}
        />
        <div className="bg-[white] shadow-sm rounded-sm overflow-hidden">
          <div className="relative mb-10 rounded-sm cover aspect-[1110/308]">
            <CoverPhoto onClick={() => setIsOpenChangeCoverPhoto(true)} />
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-10 translate-y-1/2">
              <div className="relative flex p-2 border-2 border-yellow-300 border-dashed">
                <ProfilePicture width={156} height={156} />
                <div
                  onClick={() => setIsOpenChangeProfilePic(true)}
                  className="camera absolute p-1 rounded-sm right-[-16px] bottom-4 bg-white cursor-pointer"
                >
                  <CameraSvg />
                </div>
              </div>
              <div className="pb-8 pl-8 mt-auto">
                <h2 className="text-lg font-bold">
                  <UserName />
                </h2>
                {isFetching ? (
                  <div className="w-16 h-2 mt-2 bg-gray-300 rounded animate-pulse" />
                ) : (
                  <h3>{data?.data.length} Friends</h3>
                )}
              </div>

              <div className="flex h-10 gap-4 ml-auto">
                <button className="flex items-center p-4 bg-white rounded-md shadow-sm">
                  <div className="p-1 mr-2 bg-yellow-300 rounded-full">
                    <PlusSvg />
                  </div>
                  Add Story
                </button>
                <button
                  className="flex items-center p-4 bg-white rounded-md shadow-sm"
                  onClick={() => setOpen(true)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
          {/* links start */}
          <div className="px-8 py-2 pt-10">
            <div className="flex justify-end gap-20 overflow-x-auto">
              <NavLink to="posts" className={navClass}>
                Post
              </NavLink>
              <NavLink to="about" className={navClass}>
                About
              </NavLink>
              <NavLink to="friends" className={navClass}>
                Friends
              </NavLink>
              <NavLink to="earnings" className={navClass}>
                Earnings
              </NavLink>
              <NavLink to="photos" className={navClass}>
                Photos
              </NavLink>
              <NavLink to="videos" className={navClass}>
                Videos
              </NavLink>
              <NavLink to="meeting" className={navClass}>
                Meeting
              </NavLink>
              <h2 className="p-4 pb-6 font-bold cursor-pointer">More</h2>
            </div>
          </div>
          {/* links end */}
        </div>
        <Outlet />
      </div>
    </>
  );
}
