import React from "react";

const ChannelCard = ({
  title,
  username,
  description,
  substext,
  channellogo,
}) => {
  return (
    <div className="p-2 ml-2 my-0 flex items-center ">
      <div className="w-[25em] ">
        <img
          src={channellogo}
          alt="logo"
          className="rounded-full m-auto border-2"
        />
      </div>
      <ul className="flex flex-col h-full w-full ml-2 p-8">
        <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 text-xl mb-2">
          {title}
        </li>
        <ul className="flex text-[rgb(96,96,96)] text-sm    items-center">
          <li className="mr-2">{username}</li>
          <li>{substext}</li>
        </ul>
        <li className="mt-2 text-ellipsis line-clamp-2 text-xs text-[rgb(96,96,96)] ">
          {description}
        </li>
      </ul>
    </div>
  );
};

export default ChannelCard;
