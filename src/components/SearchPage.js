import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

const SearchPage = ({ search }) => {
    const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchAPI();
  }, []);

  const getSearchAPI = async () => {
    
    const url = `https://youtube138.p.rapidapi.com/search/?q=${search}&hl=en&gl=US`;
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
    <div className="flex flex-col">
      <div>FilterOptions</div>
      {searchResult?.contents?.map((item) => {
        return (
          <SearchCard
            thumbnail={item.video.thumbnails[0].url}
            title={item.video.title}
            channelName={item.video.author.title}
            channellogo={item.video.author.avatar[0].url}
            isVerified={item.video.author.badges[0]}
            views={item.video.stats.views}
            publishTime={item.video.publishedTimeText}
          />
        );
      })}
    </div>
  );
};

export default SearchPage;
