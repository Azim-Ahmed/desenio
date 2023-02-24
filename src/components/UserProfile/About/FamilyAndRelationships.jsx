import OverViewCard from "components/Shared/About/OverViewCard";
import { useGetProfileQuery } from "features/profile/profileApi";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import maritalStatusIcon from "../../../assets/images/wedding-rings.png";
import OverViewLayout from "./OverViewLayout";

export default function FamilyAndRelationships() {
  const {
    data: profileData,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetProfileQuery();

  return (
    <OverViewLayout>
      {isSuccess ? (
        <>
          <OverViewCard
            Icon={maritalStatusIcon}
            title="Marital Status"
            privacy="friends"
            types={["Single", "Married"]}
            type="maritalStatus"
          />
        </>
      ) : isFetching || isLoading ? (
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
