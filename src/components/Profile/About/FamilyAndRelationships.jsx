import OverViewCard from "components/Shared/About/OverViewCard";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import maritalStatusIcon from "../../../assets/images/wedding-rings.png";
import OverViewLayout from "./OverViewLayout";
import { useProfileUpdateContext } from "context/UpdateProfileInfo";

export default function FamilyAndRelationships() {
  const {
    isUpdating,
    state: me,
    setState: setMe,
    isProfileDataSuccess,
    isProfileDataLoading,
    isProfileDataFetching,
    handleUpdateMaritalStatus,
  } = useProfileUpdateContext();

  return (
    <OverViewLayout>
      {isProfileDataSuccess ? (
        <>
          <OverViewCard
            Icon={maritalStatusIcon}
            title="Marital Status"
            privacy="friends"
            types={["single", "married", "divorced"]}
            type="maritalStatus"
            me={me}
            setMe={setMe}
            isUpdating={isUpdating}
            edit
            handleUpdateMaritalStatus={handleUpdateMaritalStatus}
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
  );
}
