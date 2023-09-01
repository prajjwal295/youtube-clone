import React from "react";

const HomeCard = ({ thumbnail, title, views, publishTime }) => {
  return (
    <div className="p-2 ml-2 w-[260px] rounded-lg items-center justify-center max-md:rounded-none max-md:px-0  max-md:flex  max-md:w-full">
        <img
          src={thumbnail}
          className="max-md:w-[40%] rounded-lg max-md:rounded-none"
          alt="cards"
        />
      <div className="flex justify-between items-start p-2 max-md:justify-start ">
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
