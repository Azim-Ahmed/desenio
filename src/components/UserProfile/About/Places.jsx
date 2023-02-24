import OverViewCard from "components/Shared/About/OverViewCard";
import { useGetProfileQuery } from "features/profile/profileApi";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import homeIcon from "../../../assets/images/homeIcon.svg";

export default function Places() {
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
            Icon={homeIcon}
            title="Lives in Dhaka Bangladesh"
            privacy="friends"
            menu
            edit
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
