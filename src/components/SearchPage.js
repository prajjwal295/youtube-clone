import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useDispatch } from "react-redux";
import { hideSideNav } from "../utils/CartSlice";
import { useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import { Link } from "react-router-dom";

const SearchPage = ({ search }) => {
  const [searchResult, setSearchResults] = useState([]);

  
  const dispatch = useDispatch();

  const handleSideNav = () => {
    dispatch(hideSideNav());
  };

  const { id } = useParams();

  useEffect(() => {
    getSearchAPI();
  }, [id, search]);

  const getSearchAPI = async () => {
    const url = `https://youtube138.p.rapidapi.com/search/?q=${
      search || id
    }&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9ea4f44demshe17e9d7c9a96b24p15b4bbjsn4a50180d1bfe",
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
    <div className="flex flex-col ml-12 ">
      <div>FilterOptions</div>
      {searchResult?.contents?.map((item) => {
        return item?.type === "video" ? (
          <Link
            to={"/watch/" + item?.video?.videoId}
            key={item?.video?.videoId}
            onClick={() => {
              handleSideNav();
            }}
          >
            <SearchCard
              thumbnail={item?.video?.thumbnails[0]?.url}
              title={item?.video?.title}
              channelName={item?.video?.author?.title}
              channellogo={item?.video?.author?.avatar[0]?.url}
              isVerified={item?.video?.author?.badges[0]}
              views={item?.video?.stats?.views}
              publishTime={item?.video?.publishedTimeText}
              description={item?.video?.descriptionSnippet}
            />
          </Link>
        ) : (
          <Link to={"/channel/" + item?.channel?.channelId}>
            <ChannelCard
              title={item?.channel?.title}
              username={item?.channel?.username}
              description={item?.channel?.descriptionSnippet}
              substext={item?.channel?.stats?.subscribersText}
              channellogo={item?.channel?.avatar[1]?.url}
            />
          </Link>
        );
      })}
    </div>
  );
};

export default SearchPage;
