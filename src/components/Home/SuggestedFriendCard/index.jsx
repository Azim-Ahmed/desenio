import SuggestFriendSvg from "components/Shared/Svg/SuggestFriendSvg";
import { useSendFriendRequestMutation } from "features/friends/friendsApi";
import { Link } from "react-router-dom";
import { REACT_APP_IMAGE_BASE_URL } from "urlConfig";
import young5 from "../../../assets/images/young-5.png";

const SuggestedFriendCard = ({ avatar, mutual_friends, name, user_id }) => {
  const [handleSendFriendReq, { isSuccess, isLoading, isError }] =
    useSendFriendRequestMutation();

  const sendMsg = () => {
    if (isSuccess) {
      return (
        <p className="pl-2 text-xs font-semibold text-green-500">
          Request sent
        </p>
      );
    } else if (isError) {
      return (
        <p className="pl-2 text-xs font-semibold text-red-500">
          Something went wrong
          <span className="block text-2xs">try again</span>
        </p>
      );
    }
  };

  return (
    <div className="flex items-center justify-between gap-3 mb-4">
      <div className="flex items-center justify-between">
        <img
          className="rounded-md h-[40px] w-[45px] object-cover"
          src={avatar ? `${REACT_APP_IMAGE_BASE_URL}/avatar/${avatar}` : young5}
          alt={name}
        />
        {isSuccess || isError ? (
          <>{sendMsg()}</>
        ) : (
          <div className="px-2">
            <Link to={`/user/${user_id}`}>
              <p className="text-xs text-[#000000]">{name}</p>
            </Link>
            <p className="text-2xs text-[#8F8F8F]">
              {mutual_friends} mutual Friend
            </p>
          </div>
        )}
      </div>
      {isSuccess || isError ? (
        <></>
      ) : (
        <SuggestFriendSvg
          onClick={() =>
            handleSendFriendReq({
              receiver_id: user_id,
            })
          }
        />
      )}
    </div>
  );
};

export default SuggestedFriendCard;
