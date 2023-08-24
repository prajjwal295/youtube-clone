import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
import ChannelCard from "../ChannelCard";
import Playlist from "./Playlist";
import Home from "./Home";
import Community from "./Community";


const Channel = ({home , playlist , community}) => {
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
        "X-RapidAPI-Key": "9d79a9aa69msh03255c4ecc93005p175c40jsn2920bf14c407",
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
        <div className="block h-[48px] m-0 p-0">
          <ul className="flex w-full h-full border-2 justify-start items-center text-[rgb(139,139,139)] ">
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                HOME
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="w-[150px] font-semibold text-md h-10 flex items-center justify-center hover:text-[black] ">
                VIDEOS
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                SHORTS
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Playlist"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                PLAYLISTS
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Community"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                COMMUNITY
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                CHANNEL
              </l1>
            </Link>
            <Link to={"/channel/" + id + "/Home"}>
              <l1 className="font-semibold text-md h-10 flex items-center justify-center  w-[150px] hover:text-[black]">
                ABOUT
              </l1>
            </Link>
          </ul>
        </div>
        <hr />
        {home ? <div><Home id={id} /> </div> : <></>}
        {playlist ? <div><Playlist id={id} /> </div> : <></>}
        {community ? <div><Community id={id} /> </div> : <></>}
      </div>
    </div>
  );
};

export default Channel;
