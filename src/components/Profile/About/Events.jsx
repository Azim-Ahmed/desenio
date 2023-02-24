import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import homeIcon from "../../../assets/images/homeIcon.svg";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";
import PostModal from "components/Shared/Modal/PostModal";
import { useState } from "react";

export default function Events() {
  const [open, setOpen] = useState(false);

  const {
    isUpdateSuccess,
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
    handleUpdatePermanentLocation,
  } = useProfileUpdateContext();

  return (
    <>
      <PostModal open={open} setOpen={setOpen}>
        <div className="2/4 h-56">hello world</div>
      </PostModal>

      <OverViewLayout>
        {isProfileDataSuccess ? (
          <>
            <OverViewCard
              Icon={homeIcon}
              title={
                me.present_location ? me.present_location : "Your location here"
              }
              privacy="friends"
              menu
              edit
              me={me.present_location}
              setMe={setMe}
              isUpdating={isUpdating}
              handleUpdateLocation={handleUpdatePermanentLocation}
              setOpen={setOpen}
            />
          </>
        ) : isProfileDataFetching || isProfileDataLoading || isUpdating ? (
          <>
            {new Array(5).fill(1).map((_, idx) => (
              <OverViewCardSkeleton key={idx} />
            ))}
          </>
        ) : (
          <OverViewCardSkeleton />
        )}
      </OverViewLayout>
    </>
  );
}
