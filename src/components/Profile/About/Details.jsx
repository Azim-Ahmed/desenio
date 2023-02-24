import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import userIcon from "../../../assets/images/userIcon.png";
import birthIcon from "../../../assets/images/birthIcon.svg";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";

export default function Details() {
  const {
    handleGender,
    handleUpdateBirthDate,
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
  } = useProfileUpdateContext();

  return (
    <OverViewLayout>
      {isProfileDataSuccess ? (
        <>
          <OverViewCard
            Icon={userIcon}
            title="Gender"
            privacy="public"
            type="gender"
            types={["male", "female", "others"]}
            me={me}
            setMe={setMe}
            isUpdating={isUpdating}
            edit
            handleGender={handleGender}
          />
          <OverViewCard
            Icon={birthIcon}
            title="Date of Birth"
            privacy="onlyme"
            type="date"
            me={me}
            setMe={setMe}
            handleUpdateBirthDate={handleUpdateBirthDate}
            isUpdating={isUpdating}
            edit
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
  );
}
