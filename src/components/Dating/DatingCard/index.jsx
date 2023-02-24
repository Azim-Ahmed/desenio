import React from "react";
import personImage from "../../../assets/images/dating.png";
import locationIcon from "../../../assets/images/location.svg";
import Label from "./Label";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import { useSendFriendRequestMutation } from "features/friends/friendsApi";

const DatingCard = ({ id, person }) => {
  const [handleSendFriendReq, { isSuccess, isLoading }] =
    useSendFriendRequestMutation();

  const { user_id, name, avatar, mutual_friends } = person;
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-3 w-full h-64 rounded-lg relative">
      <div className="relative flex items-center justify-center w-full h-full dark:border-gray-800">
        <img
          alt="person img"
          src={
            avatar
              ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${avatar}`
              : personImage
          }
          className={`w-full h-full transition-opacity object-cover duration-200 rounded-lg ${
            loading ? "opacity-0" : "opacity-100"
          }`}
          onLoad={() => {
            setLoading(false);
          }}
        />
        {loading && (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-500 animate-pulse rounded-lg" />
        )}
      </div>

      <Label matched={id * 10} />

      <div className="absolute left-2 bottom-4 flex flex-col space-y-0 mb-5">
        <p className="text-sm font-semibold truncate">{name}</p>
        <div className="flex space-x-1">
          <img src={locationIcon} alt="location icon" />
          <p className="text-xs">{id * 10} km away</p>
        </div>
      </div>

      <div className="absolute bottom-2 right-2 flex items-center space-x-2">
        <button className="h-8 rounded-lg bg-gray-600  w-8 text-xl hover:bg-gray-700">
          x
        </button>
        <button
          className={`h-8 rounded-lg ${
            isSuccess
              ? "bg-green-600 text-black cursor-not-allowed"
              : "bg-gray-600 text-white hover:bg-gray-700"
          } ${isLoading && "animate-pulse"}  w-8 text-2xl`}
          disabled={isLoading || isSuccess}
          onClick={() =>
            handleSendFriendReq({
              receiver_id: user_id,
            })
          }
        >
          {isSuccess ? "✓" : isLoading ? "..." : "+"}
        </button>
      </div>
    </div>
  );
};

export default DatingCard;
