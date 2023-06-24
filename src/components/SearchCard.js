import React from 'react'

const SearchCard = ({
    type,
}) => {

  return (
    <div
      className="p-2 m-2 w-[350px] rounded-lg items-center justify-center  "
      // onMouseOver={handleMouseOver(hover)}
      // onMouseOut={handleMouseOut(hover)}
      key={key}
    >
      <img src={thumbnail} className="w-full rounded-lg" alt="cards" />
      <div className="flex justify-between items-start p-2">
        <div className="flex-[0.2]  h-[36px] w-[36px]">
          <img
            src={channellogo}
            className="rounded-full h-[36px] w-[36px]"
            alt="channel"
          />
        </div>
        <ul className="flex-[0.8]">
          <li className="font-semibold overflow-hidden text-ellipsis line-clamp-2 ">
            {title}
          </li>
          <li className="text-[rgb(96,96,96)] text-xs font-semibold">
            {channelName}
          </li>
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
}

export default SearchCard