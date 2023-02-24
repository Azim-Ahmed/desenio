import React from "react";
import PlusSvg from "./../../Shared/Svg/PlusSvg";
import f1 from "../../../assets/images/suggest-slider-1.png";
import { useSendFriendRequestMutation } from "features/friends/friendsApi";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SuggestFriendSlider = ({ friend }) => {
  const [handleSubmit, { isSuccess, isLoading, isError }] =
    useSendFriendRequestMutation();
  const { name, avatar, user_id } = friend;
  const navigate = useNavigate();

  return (
    <div className="p-1">
      <Link to={`/user/${user_id}`}>
        <div
          onClick={() => navigate(`/user/${user_id}`)}
          className="relative aspect-square"
        >
          <img
            className="rounded-md w-full h-full object-cover"
            src={avatar ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${avatar}` : f1}
            alt=""
          />
          {/* {isSuccess ? (
            <div className="w-[31px] h-[31px] rounded-full flex items-center justify-center bg-green-600 absolute right-2 bottom-2 cursor-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          ) : (
            <div
              className="w-[31px] h-[31px] rounded-full p-2 bg-[#FFD700] absolute bottom-2 right-2 cursor-pointer"
              onClick={() =>
                handleSubmit({
                  receiver_id: user_id,
                })
              }
            >
              <PlusSvg />
            </div>
          )} */}
        </div>

        <p className="font-medium text-center text-[#000000] text-[16px] mt-1">
          {name}
        </p>
      </Link>

      <div className="flex items-center mt-2 gap-2">
        <button
          className={`rounded-lg py-3 flex items-center justify-center gap-2 transition-all duration-150 flex-1 ${
            isSuccess ? "bg-green-600" : isError ? "bg-red-600" : "bg-[#FFD700]"
          }  cursor-pointer disabled:cursor-not-allowed disabled:animate-pulse disabled:bg-gray-400`}
          disabled={isLoading}
          onClick={() =>
            handleSubmit({
              receiver_id: user_id,
            })
          }
        >
          {isSuccess ? (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-white font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
              Sent
            </>
          ) : isError ? (
            "Try Again"
          ) : (
            "+ Add Friend"
          )}
        </button>
      </div>
    </div>
  );
};

export default SuggestFriendSlider;
