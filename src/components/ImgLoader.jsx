import React from "react";

const ImgLoader = () => {
  return (
    <div className="relative flex flex-col h-full w-full justify-center">
      <div className="relative mx-auto">
        <div className="w-20 h-20 border-teal-200 border-2 rounded-full"></div>
        <div className="w-20 h-20 border-teal-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div className="relative mx-auto">
        <div className="w-10 h-10 border-teal-200 border-2 rounded-full"></div>
        <div className="w-10 h-10 border-teal-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>

      <div className="relative mx-auto">
        <div className="w-5 h-5 border-teal-200 border-2 rounded-full"></div>
        <div className="w-5 h-5 border-teal-700 border-t-2 animate-spin rounded-full absolute left-0 top-0"></div>
      </div>
    </div>
  );
};

export default ImgLoader;
