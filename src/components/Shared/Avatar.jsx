import React from "react";

function Avatar({ src, name }) {
  const [loading, setLoading] = React.useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow">
      <img
        alt={name}
        src={src}
        width="256"
        height="256"
        className={`w-full h-auto transition-opacity duration-200 ${
          loading ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => {
          setLoading(false);
        }}
      />
      {loading && (
        <div className="absolute top-0 w-full h-full bg-gray-100 animate-pulse dark:bg-gray-900" />
      )}
    </div>
  );
}

export default Avatar;
