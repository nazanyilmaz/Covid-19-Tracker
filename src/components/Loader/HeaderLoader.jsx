import React from "react";

const HeaderLoader = () => {
  return (
    <div
      data-testid="header-loader"
      className="flex items-center space-2 gap-2 animate-pulse"
    >
      <div className=" w-16 h-12 bg-gray-200 rounded-md" />
      <div className="w-[150px] h-2 bg-gray-200 rounded-lg" />
    </div>
  );
};

export default HeaderLoader;
