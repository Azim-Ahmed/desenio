import * as React from "react";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "features/profile/profileApi";

export const ProfileContext = React.createContext();

const UpdateProfileProvider = ({ children }) => {
  const [
    handleProfileUpdate,
    { isLoading: isUpdating, isSuccess: isUpdateSuccess },
  ] = useUpdateProfileMutation();

  const [state, setState] = React.useState({
    name: "",
    bio: "",
    email: "",
    phone: "",
    two_step: "",
    two_step_tag: "",
    gender: "",
    date_of_birth: "",
    current_location: "",
    present_location: "",
    work_at: "",
    merital_status: "",
    study_at: "",
  });
  console.log(state);

  const {
    data: profileData,
    isFetching: isProfileDataFetching,
    isLoading: isProfileDataLoading,
    isSuccess: isProfileDataSuccess,
  } = useGetProfileQuery();

  React.useEffect(() => {
    setState({
      name: profileData?.data.name || "",
      bio: profileData?.data.bio || "your bio",
      email: profileData?.data.email || "",
      phone: profileData?.data.phone || "",
      two_step: profileData?.data.two_step || "",
      two_step_tag: profileData?.data.two_step_tag || "",
      gender: profileData?.data.gender || "",
      date_of_birth: profileData?.data.date_of_birth || "",
      current_location: profileData?.data.current_location || "",
      present_location: profileData?.data.present_location || "",
      work_at: profileData?.data.work_at || "",
      merital_status: profileData?.data.merital_status || "",
      study_at: profileData?.data.study_at || "",
    });
  }, [
    profileData?.data.bio,
    profileData?.data.current_location,
    profileData?.data.date_of_birth,
    profileData?.data.email,
    profileData?.data.gender,
    profileData?.data.merital_status,
    profileData?.data.name,
    profileData?.data.phone,
    profileData?.data.present_location,
    profileData?.data.study_at,
    profileData?.data.two_step,
    profileData?.data.two_step_tag,
    profileData?.data.work_at,
  ]);

  const handleGender = (value) => {
    handleProfileUpdate({
      ...state,
      gender: value,
    });
  };

  const handleUpdateBirthDate = (value) => {
    handleProfileUpdate({
      ...state,
      date_of_birth: value,
    });
  };

  const handleUpdateMaritalStatus = (value) => {
    handleProfileUpdate({
      ...state,
      merital_status: value,
    });
  };

   const handleUpdatePhone = (value) => {
    handleProfileUpdate({
      ...state,
      phone: value,
    });
  };

  const handleUpdatePermanentLocation = (value) => {
    handleProfileUpdate({
      ...state,
      present_location: value,
    });
  };

  const handleUpdateCurrentLocation = (value) => {
    handleProfileUpdate({
      ...state,
      current_location: value,
    });
  };

  const handleUpdateWorkAt = (value) => {
    handleProfileUpdate({
      ...state,
      work_at: value,
    });
  };

  const handleUpdateStudyAt = (value) => {
    handleProfileUpdate({
      ...state,
      study_at: value,
    });
  };

  return (
    <ProfileContext.Provider
      value={{
        state,
        setState,
        isUpdating,
        isUpdateSuccess,
        isProfileDataFetching,
        isProfileDataLoading,
        isProfileDataSuccess,
        handleGender,
        handleUpdateBirthDate,
        handleUpdateMaritalStatus,
        handleUpdatePermanentLocation,
        handleUpdateCurrentLocation,
        handleUpdateWorkAt,
        handleUpdateStudyAt,
        handleUpdatePhone
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default UpdateProfileProvider;

export const useProfileUpdateContext = () => React.useContext(ProfileContext);
