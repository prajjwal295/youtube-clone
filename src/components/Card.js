import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Card = ({
  thumbnail,
  title,
  channelName,
  channellogo,
  channelId,
  views,
  publishTime,
  key,
  isVerified,
}) => {
  return (
    <div
      className="p-2 m-2 w-[420px] rounded-lg items-center justify-center max-md:w-[100vw] max-md:rounded-none max-md:px-0 max-md:m-0 "
      key={key}
    >
      <img
        src={thumbnail}
        className="w-full h-[230px] border-20 border-black rounded-lg max-md:rounded-none relative bg-cover"
        alt="cards"
      />

      <div className="flex justify-between items-start p-2">
        <div className="flex-[0.2] h-[36px] w-[36px] max-md:pl-4 pt-4">
          <Link to={"/channel/" + channelId}>
            <img
              src={channellogo}
              className="rounded-full h-[36px] w-[36px] cursor-pointer"
              alt="channel"
            />
          </Link>
        </div>
        <ul className="flex-[0.8]">
          <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 ">
            {title}
          </li>
          <Link to={"/channel/" + channelId}>
            <li className="text-[rgb(96,96,96)] text-xs font-semibold cursor-pointer">
              {channelName}
            </li>
          </Link>
          <ul className="text-[rgb(96,96,96)] text-xs font-semibold flex items-center">
            <li className="mr-2"> {views} views </li>
            <li className="mr-2"> {publishTime} </li>
            <li>
              {isVerified ? <VscVerifiedFilled className="text-base" /> : <></>}
            </li>
          </ul>
        </ul>
        <BiDotsVerticalRounded className="text-2xl  " />
      </div>
    </div>
  );
};

export default Card;
