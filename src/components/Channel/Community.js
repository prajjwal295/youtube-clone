import React, { useEffect, useState } from "react";
import CommunityCard from "./CommunityCard";
import { Link } from "react-router-dom";

const Community = ({ id }) => {
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchChannelCommunity();
  }, []);

  const fetchChannelCommunity = async () => {
    const url = `https://youtube138.p.rapidapi.com/channel/community/?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "9d79a9aa69msh03255c4ecc93005p175c40jsn2920bf14c407",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log(result);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col px-40 items-center mx-auto">
      {searchResult?.contents?.map((item) => {
        return (
          //   <Link
          //     to={`/watch?v=${item?.video?.publishedTimeText}`}
          //     key={item?.video?.videoId}
          //   >
          <CommunityCard
            text={item?.post?.text}
            channelTitle={item?.post?.author?.title}
            channelid={item?.post?.author?.channelId}
            channelLogo={item?.post?.author?.avatar[0]?.url}
            thumbnail={item?.post?.attachment?.images[0]?.source}
            likes={item?.post?.stats?.likes}
            comments={item?.post?.stats?.comments}
            publishTimeText={item?.post?.publishedTimeText}
          />
          //   </Link>
        );
      })}
    </div>
  );
};

export default Community;
