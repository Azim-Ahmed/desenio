import { useSendFriendRequestMutation } from "features/friends/friendsApi";
import {
  useAddFollowingRequestMutation,
  useGetUserDataQuery,
  useUnFollowRequestMutation,
} from "features/user/userApi";
import { NavLink, Outlet, useParams } from "react-router-dom";
import CoverPhoto from "../components/Shared/ProfilePicture/CoverPhoto";
import StaticProfilePicture from "../components/Shared/StaticProfilePicture/StaticProfilePicture";

export default function UserProfileLayout({ children }) {
  const { id } = useParams();
  const [
    handleAddFollow,
    {
      isSuccess: isFollowingSuccess,
      isLoading: isFollowingLoading,
      isError: isFollowingError,
    },
  ] = useAddFollowingRequestMutation();

  const [
    handleUnFollow,
    {
      isSuccess: isUnFollowSuccess,
      isLoading: isUnFollowLoading,
      isError: isUnFollowError,
    },
  ] = useUnFollowRequestMutation();

  const {
    data,
    isFetching,
    error,
    isSuccess: userProfileDataFetched,
  } = useGetUserDataQuery(id);
  const [handleSubmit, { isSuccess, isError }] = useSendFriendRequestMutation();
  console.log(
    "file: UserProfileLayout.jsx:11 ~ UserProfileLayout ~ data",
    data
  );

  const navClass = ({ isActive }) => {
    const cls = "p-4 pb-6 font-bold cursor-pointer";
    const activeCls =
      "text-yellow-300 border-b-4 border-yellow-300 border-solid";

    if (isActive) return cls + " " + activeCls;

    return cls;
  };

  return (
    <>
      <div className="p-4">
        <div className="bg-[white] shadow-sm rounded-sm overflow-hidden">
          <div className="relative mb-10 rounded-sm cover aspect-[1110/308]">
            <CoverPhoto />
            <div className="absolute bottom-0 left-0 right-0 flex items-center px-10 translate-y-1/2">
              <div className="relative flex p-2 border-2 border-yellow-300 border-dashed">
                <StaticProfilePicture
                  src={data?.data?.avatar}
                  isLoading={isFetching}
                  width={156}
                  height={156}
                />
                <div className="camera absolute p-1 rounded-sm right-[-16px] bottom-4 bg-white cursor-pointer"></div>
              </div>
              <div className="pb-8 pl-8 mt-auto">
                <h2 className="text-lg font-bold">{data?.data?.name}</h2>
                {isFetching ? (
                  <div className="w-16 h-2 mt-2 bg-gray-300 rounded animate-pulse" />
                ) : (
                  <h3>{data?.data.length} Friends</h3>
                )}
              </div>
              {userProfileDataFetched && (
                <div className="flex h-10 gap-4 ml-auto">
                  {data?.data?.followed ? (
                    <button
                      disabled={isUnFollowLoading || isUnFollowError}
                      className={`flex items-center p-4 rounded-md shadow-sm transition-all duration-100 disabled:cursor-not-allowed
                    ${isFollowingLoading ? "animate-pulse bg-gray-300" : ""}
                    ${
                      data?.data?.followed
                        ? "bg-yellow-500 text-white hover:text-white hover:bg-yellow-400"
                        : isFollowingError
                        ? "bg-red-500 text-white"
                        : "bg-white hover:text-white hover:bg-yellow-500 "
                    }
                  `}
                      onClick={() => handleUnFollow(data?.data?.follow_id)}
                    >
                      Following
                    </button>
                  ) : (
                    <button
                      disabled={isFollowingLoading || isFollowingError}
                      className={`flex items-center p-4 rounded-md shadow-sm transition-all duration-100 disabled:cursor-not-allowed
                    ${isFollowingLoading ? "animate-pulse bg-gray-300" : ""}
                    ${
                      data?.data?.followed
                        ? "bg-yellow-500 text-white hover:text-white hover:bg-yellow-400"
                        : isFollowingError
                        ? "bg-red-500 text-white"
                        : "bg-white hover:text-white hover:bg-yellow-500"
                    }
                  `}
                      onClick={() =>
                        handleAddFollow({
                          following_id: data?.data?.user_id,
                        })
                      }
                    >
                      Follow
                    </button>
                  )}

                  <button
                    // className="flex items-center p-4 bg-white rounded-md shadow-sm hover:bg-yellow-500 hover:text-white transition-all duration-100"
                    className={`rounded-md shadow-sm p-4 flex items-center text-white justify-center gap-2 transition-all duration-150 flex-1 ${
                      isSuccess || data?.data.friendship_status === "req_send"
                        ? "bg-green-600"
                        : isError
                        ? "bg-red-600"
                        : "bg-[#FFD700]"
                    }  cursor-pointer disabled:cursor-not-allowed disabled:animate-pulse disabled:bg-gray-400`}
                    onClick={() => {
                      handleSubmit({
                        receiver_id: id,
                      });
                      handleAddFollow({
                        following_id: data?.data?.user_id,
                      });
                    }}
                  >
                    {data?.data.friendship_status === "req_send" || isSuccess
                      ? "Sent"
                      : "Add friend"}
                  </button>
                </div>
              )}
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
