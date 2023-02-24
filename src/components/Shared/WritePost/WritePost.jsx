import { Icon } from "@iconify/react";
import { useCreatePostMutation } from "features/profile/profileApi";
import { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import LoadingButton from "../../core/Button/LoadingButton";
import Modal from "../../core/Modal";
import ProfilePicture from "../ProfilePicture/ProfilePicture";

export default function WritePost({ open, onClose }) {
  const contentRef = useRef(null);
  const [valid, setValid] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [handleSubmit, { isSuccess, isLoading }] = useCreatePostMutation();
  let location = useLocation();

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

  const handleInputChange = (e) => {
    const val = e.target.innerHTML;
    if (val === "<br>") {
      setValid(false);
      setHasText(false);
    } else {
      setValid(true);
      setHasText(true);
    }
  };

  const handleSelect = (e, type) => {
    const files = e.target.files;
    setValid(true);
    if (type === "image") {
      setSelectedImages([...files]);
    } else {
      console.log("video", files);
      setSelectedVideos([...files]);
    }
  };

  // const handlePost = () => {
  //   const content = contentRef.current.innerText;
  //   console.log(content);
  //   handleSubmit({ title: content });
  // };
  const handlePost = () => {
    const formData = new FormData();
    const title = contentRef.current.innerText;
    if (title) {
      formData.append("title", title);
    }
    if (selectedImages.length > 0) {
      selectedImages.forEach((file) => formData.append("image[]", file));
    }
    if (selectedVideos.length > 0) {
      selectedVideos.forEach((file) => formData.append("video[]", file));
    }
    location.pathname === "/profile/posts" ?
    handleSubmit({formData, route:"profile"}) :
    handleSubmit({formData, route:"home"})
  };

  const resetData = () => {
    setValid(false);
    setSelectedImages([]);
    setSelectedVideos([]);
  };

  useEffect(() => {
    if (isSuccess) {
      onClose();
    }
  }, [isSuccess]);

  useEffect(resetData, [open]);

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-center text-lg font-bold p-4 border-b border-solid border-gray-400">
        Create Post
      </h2>
      <div className="flex flex-col p-4 min-h-[40vh] max-h-[80vh]">
        <div className="flex gap-2">
          <ProfilePicture />
          <div>
            <h3 className="text-lg">Name</h3>
          </div>
        </div>
        <div
          className={`py-4 relative ${
            isLoading ? "opacity-70 animate-pulse" : ""
          }`}
        >
          <p
            onKeyDown={() => {
              setValid(true);
              setHasText(true);
            }}
            onKeyUp={handleInputChange}
            ref={contentRef}
            contentEditable
            className="text-[24px] min-w-[25vw] min-h-[50px] max-h-[20vh] overflow-y-auto focus-visible:outline-none"
          ></p>
          {!hasText && (
            <p className="z-[-1] absolute top-0 mt-4 text-[24px] text-gray-500">
              What's on your mind?
            </p>
          )}
        </div>
        <div
          className={`p-2 flex gap-2 max-h-[250px] max-w-[480px] overflow-hidden ${
            isLoading ? "opacity-70 animate-pulse" : ""
          }`}
        >
          {selectedImages.map((file) => (
            <div className="shadow-md rounded-md overflow-hidden">
              <img
                className="max-h-[250px] object-cover"
                src={URL.createObjectURL(file)}
                alt="Post"
              />
            </div>
          ))}
          {selectedVideos.map((file) => (
            <div className="shadow-md rounded-md">
              <video
                className="max-h-[250px] object-cover"
                controls
                src={URL.createObjectURL(file)}
              />
            </div>
          ))}
        </div>
        <div
          className={`flex gap-2 rounded-md pt-4 my-4 mt-auto ${
            isLoading ? "opacity-70 animate-pulse" : ""
          }`}
        >
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <label className="cursor-pointer">
              <Icon
                icon="bytesize:photo"
                color="#00dd80"
                width="22"
                height="22"
              />
              <input
                multiple
                accept="image/*"
                onChange={(e) => handleSelect(e, "image")}
                className="hidden"
                type="file"
              />
            </label>
          </button>
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <Icon
              icon="la:user-friends"
              color="#3385FF"
              width="27"
              height="27"
            />
          </button>
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <label className="cursor-pointer">
              <Icon
                icon="iconoir:video-camera"
                color="#eb4132"
                width="27"
                height="27"
              />
              <input
                multiple
                accept="video/*"
                onChange={(e) => handleSelect(e, "video")}
                className="hidden"
                type="file"
              />
            </label>
          </button>
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <Icon
              icon="fluent:gif-20-regular"
              color="#037588"
              width="27"
              height="27"
            />
          </button>
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <Icon icon="bx:smile" color="#ffb600" width="27" height="27" />
          </button>
          <button
            disabled={isLoading}
            className={isLoading ? "pointer-events-none animate-pulse" : ""}
          >
            <Icon icon="mdi:dots-horizontal" width="27" height="27" />
          </button>
          <LoadingButton
            onClick={handlePost}
            disabled={!valid}
            loading={isLoading}
          >
            Post
          </LoadingButton>
        </div>
      </div>
    </Modal>
  );
}
