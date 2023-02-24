const StoryCard = () => {
  return (
    <div className="h-[150px] w-[100px] rounded-md cursor-pointer bg-[rgba(0, 0, 0, 0.17)]">
      <img
        src="https://picsum.photos/200/300"
        className="h-full w-full object-cover rounded-md"
        alt="story"
      />
    </div>
  );
};

export default StoryCard;
