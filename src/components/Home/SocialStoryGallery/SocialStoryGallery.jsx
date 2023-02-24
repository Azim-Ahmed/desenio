import React from "react";
import './SocialStoryGallery.css'

const SocialStoryGallery = ({ story }) => {
  const { addedImage, profileImage, name } = story;

  return (
      <div className="story-gallery w-[100%] h-[100%] mb-[20px]">
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${addedImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            objectFit:'cover',
            backgroundPosition: "center",
          }}
          className={`story1  w-[100%] h-[220px]  relative rounded-lg`}
        >
          <img
            src={profileImage}
            className="absolute border-[red] border-8 w-[45px] h-[45px] rounded-[100%] bottom-[20%] right-[37%] "
            alt=""
          />
          <p className="absolute bottom-[20px]  text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
           {name}
          </p>
        </div>
      </div>

  );
};

export default SocialStoryGallery;