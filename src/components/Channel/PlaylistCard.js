import React from "react";
import { MdOutlinePlaylistPlay } from "react-icons/md";

const PlaylistCard = ({ thumbnail, title, videoCount }) => {
  return (
    <div className="p-2 m-2 w-[260px] rounded-lg items-center justify-center">
      <div className="w-full rounded-lg relative">
        <img src={thumbnail} className="w-full rounded-lg" alt="cards" />
        <div className="absolute bottom-0 bg-[rgb(71,69,69)] text-white flex w-full justify-between rounded-b-lg text-xs h-5 px-2">
          <MdOutlinePlaylistPlay className="text-xl"/>
          <h1>{videoCount} videos</h1>
        </div>
      </div>
      <div className="flex justify-between items-start p-2">
        <ul className="flex-[0.8]">
          <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 ">
            {title}
          </li>
          <li className="mr-2"> {videoCount} videos</li>
        </ul>
      </div>
    </div>
  );
};

export default PlaylistCard;
