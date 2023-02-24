import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import phoneIcon from "../../../assets/images/phoneIcon.svg";
import mailIcon from "../../../assets/images/mailIcon.png";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";
import { useEffect, useState } from "react";
import UpdateModal from "./UpdateModal";

export default function ContactAndBasicInfo() {
  const {
    isUpdateSuccess,
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
    handleUpdatePhone,
  } = useProfileUpdateContext();

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    phone: me?.phone,
  });

  useEffect(() => {
    if ((me.current_location, me.present_location)) {
      setValue({
        phone: me?.phone,
      });
    }
  }, [me?.phone]);

  useEffect(() => {
    if (isUpdateSuccess) {
      setOpen(false);
    }
  }, [isUpdateSuccess]);

  return (
    <>
      <UpdateModal
        value={value.phone}
        setValue={setValue}
        open={open}
        name="phone"
        setOpen={setOpen}
        isUpdating={isUpdating}
        handleChangeFunc={handleUpdatePhone}
        title="Your contact info"
      />

      <OverViewLayout>
        {isProfileDataSuccess ? (
          <>
            <OverViewCard
              Icon={phoneIcon}
              title={me?.phone ? me?.phone : "Your Contact info"}
              privacy="friends"
              menu
              edit
              me={me.phone}
              setMe={setMe}
              isUpdating={isUpdating}
              setOpen={setOpen}
            />

            <OverViewCard
              Icon={mailIcon}
              title={me?.email}
              subtitle="Email"
              privacy="public"
            />
          </>
        ) : isProfileDataFetching || isProfileDataLoading ? (
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
