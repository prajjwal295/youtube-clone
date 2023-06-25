import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import ChannelHome from "./ChannelHome";

const Channel = () => {
  const { id } = useParams();
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchChannel();
  }, []);

  const fetchChannel = async () => {
    const url = `https://youtube138.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "762add6099msha41e68e8366a90ap135b65jsnd61ae5b350c2",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log("result", result);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full ">
      <div className="w-full">
        <img src={searchResult?.banner?.desktop[2]?.url} className="w-full" />
      </div>
      <div className="mx-20">
   
          <ChannelCard
            title={searchResult?.title}
            username={searchResult?.username}
            description={searchResult?.description}
            substext={searchResult?.stats?.subscribersText}
            channellogo={searchResult?.avatar?.[1]?.url}
          />
     
        <hr />
        <ChannelHome id={id} />
      </div>
    </div>
  );
};

export default Channel;
