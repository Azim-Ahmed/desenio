import SocialRightBar from "components/Home/SocialRightBar/SocialRightBar";
import SocialLeftBar from "components/Home/SocialLeftBar/SocialLeftBar";
import React from "react";
import storyAdd1 from "../../assets/images/Mask-group.png";
import storyAdd2 from "../../assets/images/Mask-group1.png";
import storyAdd3 from "../../assets/images/Mask-group2.png";
import storyAdd4 from "../../assets/images/Mask-group3.png";
import storyAdd5 from "../../assets/images/Mask-group4.png";
import plusIcon from "../../assets/images/plus-icon.png";
import StoryModal from "./StoryModal";
import StorySlider from "components/Story/StorySlider";
import ViewStory from "./ViewStory";
import Comment from "./Comment";

const storyGalleries = [
  {
    id: 1,
    addedImage: storyAdd1,
    profileImage: plusIcon,
    name: "Add your story",
  },
  {
    id: 2,
    addedImage: storyAdd2,
    profileImage: storyAdd2,
    name: "Janelliya will",
  },
  {
    id: 3,
    addedImage: storyAdd3,
    profileImage: storyAdd3,
    name: "Janelliya will",
  },
  {
    id: 4,
    addedImage: storyAdd4,
    profileImage: storyAdd4,
    name: "Janelliya will",
  },
  {
    id: 5,
    addedImage: storyAdd5,
    profileImage: storyAdd5,
    name: "Janelliya will",
  },
  {
    id: 6,
    addedImage: storyAdd2,
    profileImage: storyAdd2,
    name: "Janelliya will",
  },
  {
    id: 7,
    addedImage: storyAdd3,
    profileImage: storyAdd3,
    name: "Janelliya will",
  },
  {
    id: 8,
    addedImage: storyAdd4,
    profileImage: storyAdd4,
    name: "Janelliya will",
  },
  {
    id: 9,
    addedImage: storyAdd5,
    profileImage: storyAdd5,
    name: "Janelliya will",
  },
];

const Stories = () => {
  return (
    <div className={`bg-white text-black dark:bg-gray-800 dark:text-white`}>
      <div className="px-2 py-5">
        <div class="grid grid-cols-6 gap-4 relative">
          <div class="col-span-1 h-screen overflow-y-auto sticky top-0 ">
            <SocialLeftBar />
          </div>

          <div className="h-screen col-span-4 overflow-x-hidden overflow-y-auto middle-content scrollbar-hide ">
            <div className="grid grid-cols-12 gap-x-3 gap-y-4">
              {storyGalleries.slice(0, 1).map((story, idx) => (
                <Story key={idx} {...story} me="true" />
              ))}

              {storyGalleries.slice(1).map((story, idx) => (
                <Story key={idx} {...story} />
              ))}
            </div>
          </div>

          <div class="col-span-1 h-screen overflow-y-auto sticky top-0">
            <SocialRightBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stories;

const Story = ({ addedImage, profileImage, name, id, me }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <StoryModal open={open} setOpen={setOpen}>
        <div className="h-full rounded-sm flex flex-col container w-full lg:w-4/5 bg-white">
          <StorySlider />
          <ViewStory />
          <Comment />
        </div>
      </StoryModal>

      <div className="col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2  w-[100%] h-[200px]">
        <div
          style={{
            background: `linear-gradient( transparent, rgba(0, 0, 0, 0.43)), url(${addedImage})`,
            backgroundRepeat: "no-repeat",
            objectFit: "cover",
            backgroundSize: "cover",
            backgroundOrigin: "border-box",
            backgroundPosition: "center",
          }}
          className={`w-[100%] h-[100%] relative rounded-lg cursor-pointer`}
          onClick={() => setOpen(true)}
        >
          <img
            src={profileImage}
            className="absolute transition-opacity duration-200 p-[1.5px] bottom-[20%] right-[33%] ease-out transform rounded-full cursor-pointer w-[50px] h-[50px] hover:scale-105"
            style={{
              border: me ? "" : "2px solid rgb(220 38 38)",
            }}
            alt=""
          />
          <p className="absolute bottom-[20px]  text-[#FFFFFF] text-center w-[100%] text-[12px] font-bold">
            {name}
          </p>
        </div>
      </div>
    </>
  );
};
