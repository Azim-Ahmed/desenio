import OverViewCard from "components/Shared/About/OverViewCard";

import { useGetUserDataQuery } from "features/user/userApi";
import { useParams } from "react-router-dom";
import calculateAge from "utils/getAge";
import locationIcon from "../../../assets/images/addressIcon.svg";
import birthIcon from "../../../assets/images/birthIcon.svg";
import homeIcon from "../../../assets/images/homeIcon.svg";
import phoneIcon from "../../../assets/images/phoneIcon.svg";
import studyIcon from "../../../assets/images/studyIcon.svg";
import workIcon from "../../../assets/images/workIcon.svg";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";

export default function UserOverview() {
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
            Icon={workIcon}
            title="UI/UX Designer at Amazon"
            subtitle="Past: Krazy IT, Alibaba, Daffodil international (DIU)"
            privacy="public"
          />
          <OverViewCard
            Icon={studyIcon}
            title="Studied BSc in Software engineering at Daffodil international University (DIU)"
            privacy="public"
          />
          <OverViewCard
            Icon={homeIcon}
            title="Lives in Dhaka Bangladesh"
            privacy="friends"
          />
          <OverViewCard
            Icon={locationIcon}
            title="From Mirpur, Dhaka Bangladesh"
            privacy="onlyme"
          />
          <OverViewCard
            Icon={phoneIcon}
            title={profileData.data.phone}
            subtitle="Mobile"
            privacy="public"
          />
          <OverViewCard
            Icon={birthIcon}
            title={`Birthday was ${calculateAge(
              profileData?.data.date_of_birth
            )} ago`}
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
