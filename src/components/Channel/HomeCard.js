import React from "react";

const HomeCard = ({ thumbnail, title, views, publishTime }) => {
  return (
    <div className="p-2 m-2 w-[260px] rounded-lg items-center justify-center max-sm:max-w-[100vw] max-sm:rounded-none max-sm:px-0 max-sm:mx-0">
      <img
        src={thumbnail}
        className="w-full rounded-lg max-sm:rounded-none"
        alt="cards"
      />
      <div className="flex justify-between items-start p-2">
        <ul className="flex-[0.8]">
          <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 ">
            {title}
          </li>
          <ul className="text-[rgb(96,96,96)] text-xs font-semibold flex items-center">
            <li className="mr-2"> {views} views </li>
            <li className="mr-2"> {publishTime} </li>
          </ul>
        </ul>
      </div>
    </div>
  );
};

export default HomeCard;
