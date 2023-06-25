import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";

const SearchCard = ({
  thumbnail,
  title,
  channelName,
  channellogo,
  views,
  publishTime,
  description,
  key,
  isVerified,
}) => {
  return (
    <div
      className="p-2 ml-2 my-0 w-full flex rounded-lg items-center  border-black"
      key={key}
    >
      <img src={thumbnail} className="rounded-lg w-[350px]" alt="cards" />

      <ul className="flex flex-col items-start  border-black h-full w-full ml-4 p-1">
        <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 text-lg mb-2">
          {title}
        </li>
        <ul className="text-[rgb(96,96,96)] text-xs font-semibold flex items-center">
          <li className="mr-2"> {views} views </li>
          <li className="mr-2"> {publishTime} </li>
          <li>
            {isVerified ? <VscVerifiedFilled className="text-base" /> : <></>}
          </li>
        </ul>
        <ul className="flex items-center h-[24px] mt-2  ">
          <li>
            <img
              src={channellogo}
              className="rounded-full h-[24px] w-[24px] mr-2"
              alt="channel"
            />
          </li>
          <li className="text-[rgb(96,96,96)] text-xs font-semibold">
            {channelName}
          </li>
        </ul>
        <li className="mt-4 text-ellipsis line-clamp-1 text-xs text-[rgb(96,96,96)] ">
          {description}
        </li>
      </ul>
      {/* <BiDotsVerticalRounded className="text-2xl  " />. */}
    </div>
  );
};

export default SearchCard;
