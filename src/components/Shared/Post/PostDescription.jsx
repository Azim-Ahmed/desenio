import { useEffect, useState } from "react";

export default function PostDescription({ title }) {
  const [seeMore, setSeeMore] = useState(false);
  const [content, setContent] = useState(title);

  const handleSeeMore = () => {
    setSeeMore((currentVal) => !currentVal);
  };

  useEffect(() => {
    if (title && title.length > 300 && !seeMore) {
      const str = title.substring(0, 250);
      setContent(str);
    } else {
      setContent(title);
    }
  }, [title, seeMore]);

  return (
    <>
      <div
        className="px-4 pb-4 leading-5 text-black break-words whitespace-pre  dark:text-white"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
      {/* {content}{" "} */}
      {/* {title.length > 300 && (
        <button
          onClick={handleSeeMore}
          className="no-underline text-[#0469FF] hover:underline"
        >
          {seeMore ? "See Less" : "See More"}
        </button>
      )} */}
    </>
  );
}
