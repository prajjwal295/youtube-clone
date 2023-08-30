import React from "react";

const Chats = ({name , message}) => {
  return (
    <div className="flex items-center m-2">
      <div className="w-[32px]">
        <img
          src="https://yt3.ggpht.com/ytc/AOPolaSm536JUJgjThwVTfj7hxa8lOCLLnphx0_T94bDQO0=s48-c-k-c0x00ffffff-no-rj"
          className="rounded-full"
        />
      </div>
      <span className="mr-2 font-bold">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default Chats;
