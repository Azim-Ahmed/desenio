/**
 *@function FriendRequest.jsx
 *@author Azim
 *
 **/
// moment for timestamp
// import Moment from "react-moment";
import toast from "react-hot-toast";
import CancelSvg from "components/Shared/Svg/CancelSvg";
import AcceptSvg from "components/Shared/Svg/AcceptSvg";
import young5 from "../../../assets/images/young-5.png";
import {
  useAcceptFriendRequestMutation,
  useRejectFriendRequestMutation,
} from "features/friends/friendsApi";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
const FriendRequest = ({ item }) => {
  const { avatar, name, created_at, friend_request_id } = item;

  const [handleAccept, { isSuccess, isError }] =
    useAcceptFriendRequestMutation();

  const [handleReject, { isSuccess: rejectSuccess, isError: isRejectError }] =
    useRejectFriendRequestMutation();

  if (isError) {
    toast.error("Something went wrong!");
  }

  if (rejectSuccess) {
    toast.success("Friend request rejected!");
  } else if (isRejectError) {
    toast.error("Something went wrong!");
  }

  const acceptOrRejectMsg = () => {
    if (isSuccess) {
      return (
        <p className="text-sm font-semibold text-green-500">
          Friend Request Accepted
        </p>
      );
    } else if (rejectSuccess) {
      return (
        <p className="text-sm font-semibold text-red-500">
          Friend Request Rejected
        </p>
      );
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 mb-4">
      <img
        className="object-cover w-12 h-12 rounded-md"
        src={avatar ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${avatar}` : young5}
        alt="user"
      />
      {isSuccess || rejectSuccess ? (
        <div className="flex-1">{acceptOrRejectMsg()}</div>
      ) : (
        <>
          <div className="flex-1">
            <p className="text-[12px] truncate text-[#000000]">
              {name || "Username"}
            </p>
            {/* <p className="text-2xs pt-1 text-[#8F8F8F]">
              {<Moment fromNow>{new Date(created_at)}</Moment>}
            </p> */}
          </div>
          <div className="flex items-center gap-1">
            <AcceptSvg handleClick={() => handleAccept(friend_request_id)} />{" "}
            <CancelSvg handleClick={() => handleReject(friend_request_id)} />
          </div>
        </>
      )}
    </div>
  );
};

export default FriendRequest;
