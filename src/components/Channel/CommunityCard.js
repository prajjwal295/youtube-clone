import React from "react";

const CommunityCard = ({
  text,
  channelTitle,
  channelid,
  channelLogo,
  thumbnail,
  likes,
  comments,
  publishedTimeText,
}) => {
  return (
    <div className="border-2 h-auto flex p-5 rounded-md my-5 min-w-full">
      <div className="rounded-full mr-4 h-10 w-10 ">
        <img src={channelLogo} className="rounded-full h-full w-full" />
      </div>
      <div className="ml-2">
        <div className="flex ">
          <h1 className="text-sm font-medium">{channelTitle}</h1>
          <h1 className="text-sm text-[rgb(139,139,139)]">
            {publishedTimeText}
          </h1>
        </div>
        <div className="flex flex-col">
          <div>
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityCard;
