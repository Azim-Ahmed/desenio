import React from "react";
import Avatar from "components/Shared/Avatar";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import Image from "../../../assets/images/friend.png";

const Friend = ({
  avatar,
  name,
  user_id,
  mutual_friends,
  friend_request_id,
}) => {
  return (
    <div className="relative h-24 col-span-12 my-2 overflow-hidden bg-gray-200 rounded-md shadow dark:bg-gray-600 md:col-span-6 lg:col-span-4 xl:col-span-3">
      <div className="flex">
        <div className="w-24 h-24 p-1">
          {avatar ? (
            <Avatar
              src={
                avatar ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${avatar}` : Image
              }
              name={name}
            />
          ) : (
            <div className="w-20 h-20 bg-gray-500 p-1 mt-1 rounded-lg flex items-center justify-center">
              <h1 className="text-3xl font-semibold">{name?.at(0)}</h1>
            </div>
          )}
        </div>
        <div className="flex justify-between flex-1 p-1">
          <div className="flex flex-col mt-3">
            <div className="w-full h-4 font-semibold text-gray-900 rounded dark:text-white">
              {name}
            </div>
            <div className="w-full h-4 mt-1 text-xs text-gray-900 rounded dark:text-white">
              {mutual_friends} Mutual friends
            </div>
          </div>

          <div className="w-6 h-6 mt-4 rounded-full cursor-pointer hover:bg-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
