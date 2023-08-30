import React from "react";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const SearchCard = ({
  thumbnail,
  title,
  channelName,
  channellogo,
  channelId,
  views,
  publishTime,
  description,
  key,
  isVerified,
  badges,
}) => {
  return (
    <div
      className="p-2 ml-2 my-0 w-full flex rounded-lg items-center  border-black max-md:w-[100vw] max-md:flex-col"
      key={key}
    >
      <div className="relative">
        <img
          src={thumbnail}
          className="rounded-lg w-[350px] max-md:w-[100vw] max-md:rounded-none"
          alt="cards"
        />
        {badges === "LIVE" ? (
          <h1 className="top-2 left-2 absolute">🔴</h1>
        ) : null}
      </div>
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
        <Link to={"/channel/" + channelId}>
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
        </Link>
        <li className="mt-4 text-ellipsis line-clamp-1 text-xs text-[rgb(96,96,96)] ">
          {description}
        </li>
      </ul>
      {/* <BiDotsVerticalRounded className="text-2xl  " />. */}
    </div>
  );
};

export default SearchCard;
