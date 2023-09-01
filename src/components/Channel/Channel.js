import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ChannelCard from "./ChannelCard";
import Playlist from "./Playlist";
import Home from "./Home";
import Community from "./Community";

const Channel = ({ home, playlist, community }) => {
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
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      // console.log("result", result);
      setSearchResults(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full max-md:max-w-[100vw] max-md:text-white">
      <div className="w-full max-md:w-[100vw]">
        <img
          src={searchResult?.banner?.desktop[2]?.url}
          className="w-full max-sm:w-[100vw]"
        />
      </div>
      <div className=" max-md:mx-0 ">
        <ChannelCard
          title={searchResult?.title}
          username={searchResult?.username}
          description={searchResult?.description}
          substext={searchResult?.stats?.subscribersText}
          channellogo={searchResult?.avatar?.[0]?.url}
        />
        <div className="block h-[48px] m-0 p-0">
          <ul className="flex w-[100vw] h-full border-b-2 border-black justify-start items-center text-[rgb(139,139,139)]">
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                HOME
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Playlist"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                PLAYLISTS
              </l1>
            </Link>
            {/* <Link to={"/channel/" + id + "/Community"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                COMMUNITY
              </l1>
            </Link> */}
          </ul>
        </div>
        <hr />
        {home ? (
          <div>
            <Home id={id} />{" "}
          </div>
        ) : (
          <></>
        )}
        {playlist ? (
          <div>
            <Playlist id={id} />{" "}
          </div>
        ) : (
          <></>
        )}
        {community ? (
          <div>
            <Community id={id} />{" "}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Channel;
