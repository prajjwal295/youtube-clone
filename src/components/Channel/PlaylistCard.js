import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";

const PlaylistCard = ({ thumbnail, title, videoCount }) => {
  return (
    <div className="p-2 m-2 mr-0  w-[260px] rounded-lg items-center justify-center max-md:w-[100vw] max-md:flex  max-md:justify-start">
      <div className="w-full rounded-lg relative  max-md:w-[40%]">
        <img src={thumbnail} className="w-full rounded-lg" alt="cards" />
        <div className="absolute bottom-0 bg-[rgb(71,69,69)] text-white flex w-full justify-between rounded-b-lg text-xs h-5 px-2">
          <MdOutlinePlaylistPlay className="text-xl" />
          <h1>{videoCount} videos</h1>
        </div>
      </div>
      <div className="flex justify-between items-start p-2 w-full max-md:justify-start">
        <ul className="flex-[0.8]">
          <li className=" overflow-hidden text-ellipsis line-clamp-2  max-md:line-clamp-1">
            {title}
          </li>
          <li className="mr-2"> {videoCount} videos</li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistCard;
