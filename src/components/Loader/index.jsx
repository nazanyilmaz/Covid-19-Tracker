import React from "react";

const Loader = () => {
  const arr = new Array(16).fill("a");
  return arr.map(() => (
    <div
      data-testid="card-loader"
      className="bg-gray-200 rounded-lg  text-gray-600 p-4 shadow-2xl h-28 w-52 animate-pulse"
    >
      <p className="h-1 bg-gray-400 rounded mt-6 w-10 " />
      <h2 className=" bg-gray-500 rounded mt-6 w-16 h-1 " />
    </div>
  ));
};

export default Loader;
