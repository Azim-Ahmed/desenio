import OverViewCard from "components/Shared/About/OverViewCard";
import { useGetUserDataQuery } from "features/user/userApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import birthIcon from "../../../assets/images/birthIcon.svg";
import userIcon from "../../../assets/images/userIcon.png";
import OverViewCardSkeleton from "./OverViewCardSkeleton";
import OverViewLayout from "./OverViewLayout";

export default function UserDetails() {
  const { id } = useParams();
  const {
    data: profileData,
    isFetching,
    isLoading,
    isSuccess,
  } = useGetUserDataQuery(id);

  const [me, setMe] = useState({
    name: profileData?.data.name || "",
    email: profileData?.data.email || "",
    phone: profileData?.data.phone || "",
    two_step: profileData?.data.two_step || "off",
    two_step_tag: profileData?.data.two_step_tag || "email",
    gender: profileData?.data.gender || "",
    date_of_birth: profileData?.data.date_of_birth || "",
    bio: profileData?.data.bio || "your bio",
  });

  useEffect(() => {
    if (isSuccess) {
      setMe({
        name: profileData?.data.name,
        email: profileData?.data.email,
        phone: profileData?.data.phone,
        two_step: profileData?.data.two_step,
        two_step_tag: profileData?.data.two_step_tag,
        gender: profileData?.data.gender,
        date_of_birth: profileData?.data.date_of_birth,
        bio: profileData?.data.bio || "your bio",
      });
    }
  }, [
    isSuccess,
    profileData?.data.bio,
    profileData?.data.date_of_birth,
    profileData?.data.email,
    profileData?.data.gender,
    profileData?.data.name,
    profileData?.data.phone,
    profileData?.data.two_step,
    profileData?.data.two_step_tag,
  ]);


  return (
    <OverViewLayout>
      {isSuccess ? (
        <>
          <OverViewCard
            Icon={userIcon}
            title="Gender"
            privacy="public"
            type="gender"
            types={["male", "female", "others"]}
            me={me}
          />
          <OverViewCard
            Icon={birthIcon}
            title="Date of Birth"
            privacy="onlyme"
            type="date"
            me={me}
            setMe={setMe}
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
