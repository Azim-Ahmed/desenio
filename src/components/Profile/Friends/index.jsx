import * as React from "react";
import { useGetFriendsQuery } from "features/friends/friendsApi";
import Avatar from "components/Shared/Avatar";
import Image from "../../../assets/images/friend.png";
import LoadingImage from "../../../assets/images/loading-user.png";
import Friend from "./Friend";
import Header from "./Header";

const Friends = () => {
  const { data, isFetching } = useGetFriendsQuery();

  if (isFetching) {
    return (
      <>
        <Header />
        <SkeletonUser />
      </>
    );
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <Header />
      <div className="grid grid-cols-12 gap-3 p-1 text-black dark:text-white">
        {data?.data?.map((friend, i) => (
          <Friend key={i} {...friend} />
        ))}
      </div>
    </section>
  );
};

export default Friends;

const SkeletonUser = () => {
  return (
    <div className="grid grid-cols-12 gap-3 p-1 text-white bg-gray-900">
      {new Array(9).fill(0).map((_, i) => (
        <div
          key={i}
          className="relative h-24 col-span-12 my-2 overflow-hidden bg-gray-500 rounded-md shadow md:col-span-6 lg:col-span-4"
        >
          <div className="w-24 h-24 p-1">
            <Avatar src={Image} name="Avatar" />
          </div>

          <div className="absolute top-0 w-full h-full bg-gray-100 dark:bg-gray-800">
            <div className="flex">
              <div className="w-24 h-24 p-1 animate-pulse">
                <Avatar src={LoadingImage} name="loading" />
              </div>
              <div className="flex flex-col mt-4 ml-1">
                <div className="w-24 h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="w-16 h-4 mt-2 bg-gray-300 rounded animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
