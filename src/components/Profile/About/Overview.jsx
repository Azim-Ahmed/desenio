import OverViewCard from "components/Shared/About/OverViewCard";
import { useGetProfileQuery } from "features/profile/profileApi";

import workIcon from "../../../assets/images/workIcon.svg";
import studyIcon from "../../../assets/images/studyIcon.svg";
import homeIcon from "../../../assets/images/homeIcon.svg";
import locationIcon from "../../../assets/images/addressIcon.svg";
// import phoneIcon from "../../../assets/images/phoneIcon.svg";
import birthIcon from "../../../assets/images/birthIcon.svg";
import userIcon from "../../../assets/images/userIcon.png";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";
import calculateAge from "utils/getAge";

export default function Overview() {
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
            Icon={workIcon}
            title={`Work at ${profileData?.data.work_at ? profileData?.data.work_at : "not updated"}`}
            // subtitle="Past: Krazy IT, Alibaba, Daffodil international (DIU)"
            privacy="public"
          />
          <OverViewCard
            Icon={studyIcon}
            title={`Study at ${profileData?.data.study_at ? profileData?.data.study_at : "not updated"}`}
            privacy="public"
            />
          <OverViewCard
            Icon={homeIcon}
            title={`From ${profileData?.data.present_location ? profileData?.data.present_location : "not updated"}`}
            privacy="friends"
            />
          <OverViewCard
            Icon={locationIcon}
            title={`Lives in ${profileData?.data.current_location ? profileData?.data.current_location : "not updated"}`}
            privacy="onlyme"
          />
          {/* <OverViewCard
            Icon={phoneIcon}
            title="01706-680700"
            // subtitle="Mobile"
            privacy="public"
          /> */}
          <OverViewCard
            Icon={birthIcon}
            title={`Birthday was ${calculateAge(
              profileData?.data.date_of_birth
            )} ago`}
            privacy="public"
          />
          <OverViewCard
            Icon={userIcon}
            title={`Sex: ${profileData?.data.gender}`}
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
