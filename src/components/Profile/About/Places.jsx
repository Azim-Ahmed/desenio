import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import homeIcon from "../../../assets/images/homeIcon.svg";
import locationIcon from "../../../assets/images/addressIcon.svg";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";
import { useState } from "react";
import { useEffect } from "react";
import UpdateModal from "./UpdateModal";

export default function Places() {
  const {
    isUpdateSuccess,
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
    handleUpdatePermanentLocation,
    handleUpdateCurrentLocation,
  } = useProfileUpdateContext();

  const [open, setOpen] = useState(false);
  const [currentOpen, setCurrentOpen] = useState(false);

  const [value, setValue] = useState({
    current_location: me?.current_location,
    present_location: me?.present_location,
  });

  useEffect(() => {
    if ((me.current_location, me.present_location)) {
      setValue({
        current_location: me?.current_location,
        present_location: me?.present_location,
      });
    }
  }, [me.current_location, me.present_location]);

  useEffect(() => {
    if (isUpdateSuccess) {
      setOpen(false);
      setCurrentOpen(false);
    }
  }, [isUpdateSuccess]);

  return (
    <>
      <UpdateModal
        value={value.present_location}
        setValue={setValue}
        open={open}
        name="present_location"
        setOpen={setOpen}
        isUpdating={isUpdating}
        handleChangeFunc={handleUpdatePermanentLocation}
        title="Your Permanent Location"
      />

      <UpdateModal
        value={value.current_location}
        setValue={setValue}
        name="current_location"
        open={currentOpen}
        setOpen={setCurrentOpen}
        isUpdating={isUpdating}
        handleChangeFunc={handleUpdateCurrentLocation}
        title="Your Current Location"
      />

      <OverViewLayout>
        {isProfileDataSuccess ? (
          <>
            <OverViewCard
              Icon={homeIcon}
              title={
                me.present_location
                  ? me.present_location
                  : "Your Permanent location here"
              }
              privacy="friends"
              menu
              edit
              me={me.present_location}
              setMe={setMe}
              isUpdating={isUpdating}
              setOpen={setOpen}
            />
            <OverViewCard
              Icon={locationIcon}
              title={
                me.current_location
                  ? me.current_location
                  : "Your Current location here"
              }
              privacy="friends"
              menu
              edit
              me={me.current_location}
              setMe={setMe}
              isUpdating={isUpdating}
              setOpen={setCurrentOpen}
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
