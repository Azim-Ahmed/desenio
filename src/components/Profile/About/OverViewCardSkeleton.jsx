import React from "react";

const OverViewCardSkeleton = () => {
  return (
    <div className="flex items-stretch space-x-2">
      <div className="h-12 w-12 bg-slate-500 animate-pulse rounded" />
      <div className="h-12 flex-1 bg-slate-500 animate-pulse rounded" />
    </div>
  );
};

export default OverViewCardSkeleton;
