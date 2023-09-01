import React, { useEffect, useState } from "react";
import PlaylistCard from "./PlaylistCard";
import { Link } from "react-router-dom";

const Playlist = ({ id }) => {
  const [searchResult, setSearchResults] = useState([]);

  useEffect(() => {
    fetchChannelPlaylist();
  }, []);

  const fetchChannelPlaylist = async () => {
    const url = `https://youtube138.p.rapidapi.com/channel/playlists/?id=${id}&filter=created_playlists_newest&hl=en&gl=US`;
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
    <div className="flex flex-wrap items-center mx-auto border-2">
      {searchResult?.contents?.map((item) => {
        return (
          //   <Link
          //     to={`/watch?v=${item?.video?.publishedTimeText}`}
          //     key={item?.video?.videoId}
          //   >
          <PlaylistCard
            thumbnail={item?.playlist?.thumbnails[0]?.url}
            title={item?.playlist?.title}
            videoCount={item?.playlist?.stats?.videos}
          />
          //   </Link>
        );
      })}
    </div>
  );
};

export default Playlist;