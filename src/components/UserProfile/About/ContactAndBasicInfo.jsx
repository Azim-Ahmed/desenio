import OverViewCard from "components/Shared/About/OverViewCard";
import { useGetUserDataQuery } from "features/user/userApi";
import { useParams } from "react-router-dom";
import mailIcon from "../../../assets/images/mailIcon.png";
import phoneIcon from "../../../assets/images/phoneIcon.svg";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";

export default function UserContactAndBasicInfo() {
  const { id } = useParams();
  const {
    data: profileData,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetUserDataQuery(id);

  return (
    <OverViewLayout>
      {isSuccess ? (
        <>
          <OverViewCard
            Icon={phoneIcon}
            title={profileData?.data?.phone}
            subtitle="Mobile"
            privacy="public"
            menu
            edit
          />
          <OverViewCard
            Icon={mailIcon}
            title={profileData?.data?.email}
            subtitle="Email"
            privacy="public"
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
