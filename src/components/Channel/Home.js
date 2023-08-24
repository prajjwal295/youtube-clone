import React, { useEffect, useState } from "react";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";

const Home = ({ id }) => {
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchChannelHome();
  }, []);

  const fetchChannelHome = async () => {
    const url = `https://youtube138.p.rapidapi.com/channel/videos/?id=${id}&hl=en&gl=US`;
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
      // console.log(result);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-wrap items-center mx-auto border-2">
      {searchResult?.contents?.map((item) => {
        return (
          <Link
            to={`/watch/${item?.video?.videoId}`}
            key={item?.video?.videoId}
          >
            <HomeCard
              thumbnail={item?.video?.thumbnails[2]?.url}
              title={item?.video?.title}
              views={item?.video?.stats?.views}
              publishTime={item?.video?.publishedTimeText}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
