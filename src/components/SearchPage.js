import React, { useEffect, useState } from "react";
import SearchCard from "./SearchCard";
import { useDispatch } from "react-redux";
import { hideSideNav } from "../utils/CartSlice";
import { useParams } from "react-router-dom";
import ChannelCard from "./Channel/ChannelCard";
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
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log({ result });
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
            badges={item?.video?.badges[0]}
            onClick={() => {
              handleSideNav();
            }}
          >
            <SearchCard
              thumbnail={item?.video?.thumbnails[0]?.url}
              title={item?.video?.title}
              channelName={item?.video?.author?.title}
              channelId={item?.video?.author?.channelId}
              channellogo={item?.video?.author?.avatar[0]?.url}
              isVerified={item?.video?.author?.badges[0]}
              views={item?.video?.stats?.views}
              publishTime={item?.video?.publishedTimeText}
              description={item?.video?.descriptionSnippet}
              badges={item?.video?.badges[0]}
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
