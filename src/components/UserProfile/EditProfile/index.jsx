import React, { useEffect, useState } from "react";
import PostModal from "components/Shared/Modal/PostModal";
import {
  useGetProfileQuery,
  useUpdateProfileMutation,
} from "features/profile/profileApi";

const EditProfile = ({ setOpen, open }) => {
  const [
    handleUpdateUsername,
    { isLoading, isError, isSuccess: isEditSuccess },
  ] = useUpdateProfileMutation();
  const { data: profileInfo, isSuccess } = useGetProfileQuery();

  const [me, setMe] = useState({
    name: profileInfo?.data.name || "",
    email: profileInfo?.data.email || "",
    phone: profileInfo?.data.phone || "",
    two_step: profileInfo?.data.two_step || "off",
    two_step_tag: profileInfo?.data.two_step_tag || "email",
    gender: profileInfo?.data.gender || "",
    date_of_birth: profileInfo?.data.date_of_birth || "",
    bio: profileInfo?.data.bio || "your bio",
  });
  const [error, setError] = useState(false);

  useEffect(() => {
    if (isSuccess) {
      setMe({
        name: profileInfo?.data.name,
        email: profileInfo?.data.email,
        phone: profileInfo?.data.phone,
        two_step: profileInfo?.data.two_step,
        two_step_tag: profileInfo?.data.two_step_tag,
        gender: profileInfo?.data.gender,
        date_of_birth: profileInfo?.data.date_of_birth,
        bio: profileInfo?.data.bio || "your bio",
      });
    }
  }, [
    isSuccess,
    profileInfo?.data.bio,
    profileInfo?.data.date_of_birth,
    profileInfo?.data.email,
    profileInfo?.data.gender,
    profileInfo?.data.name,
    profileInfo?.data.phone,
    profileInfo?.data.two_step,
    profileInfo?.data.two_step_tag,
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      me.name === "" ||
      me.email === "" ||
      me.phone === "" ||
      me.two_step === "" ||
      me.two_step_tag === "" ||
      me.date_of_birth === "" ||
      me.gender === ""
    ) {
      setError(true);
    }
    if (
      me.name === "" ||
      me.email === "" ||
      me.phone === "" ||
      me.two_step === "" ||
      me.two_step_tag === "" ||
      me.date_of_birth === "" ||
      me.gender === ""
    )
      return;

    handleUpdateUsername(me);
  };

  useEffect(() => {
    if (isError) {
      setError(true);
    } else if (isEditSuccess) {
      setOpen(false);
    }
  }, [isEditSuccess, isError, setOpen]);

  return (
    <PostModal open={open} setOpen={setOpen}>
      <div className="bg-white w-1/4 m-h-60 flex flex-col rounded">
        <div className="border px-3 py-2  border-gray-800 shadow-md mb-2">
          <h2 className="text-lg font-bold text-gray-900">Edit Profile</h2>
        </div>

        <form
          onSubmit={handleSubmit}
          className="px-3 py-2 h-full flex flex-col"
        >
          <input type="hidden" name="remember" value="true" />

          <div className="flex flex-col w-full">
            <label className="text-sm mb-1 font-semibold text-gray-900">
              Username
            </label>
            <input
              id="username"
              type="text"
              name="username"
              placeholder="User name"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              onChange={(e) =>
                setMe({
                  ...me,
                  name: e.target.value,
                })
              }
              value={me.name}
            />

            <label className="text-sm my-1 font-semibold text-gray-900">
              Bio
            </label>
            <textarea
              id="bio"
              type="text"
              name="bio"
              placeholder="Your bio"
              cols="3"
              rows="3"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500 resize-none"
              onChange={(e) =>
                setMe({
                  ...me,
                  bio: e.target.value,
                })
              }
              value={me.bio}
            ></textarea>
            {/* <input
              id="bio"
              type="text"
              name="username"
              placeholder="User name"
              className="w-full px-4 py-3 text-black bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gray-500 focus:ring-1 focus:ring-gray-500"
              onChange={(e) =>
                setMe({
                  ...me,
                  bio: e.target.value,
                })
              }
              value={me.bio}
            /> */}

            {error && (
              <span className="text-sm text-red-500">
                Something went wrong!
              </span>
            )}
          </div>

          <div className="flex-1" />

          <button
            type="submit"
            className={`bg-black text-white rounded py-3 mt-3 w-28 ${
              isLoading && "animate-pulse cursor-not-allowed"
            }`}
            disabled={isLoading}
          >
            {isLoading ? "saving..." : "save"}
          </button>
        </form>
      </div>
    </PostModal>
  );
};

export default EditProfile;
