import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import Card from "./Card";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { hideSideNav } from "../utils/CartSlice";

const Body = () => {
  const [result, setResult] = useState("");

  const dispatch = useDispatch();

  const handleSideNav = () =>{
    dispatch(hideSideNav());
  }

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const url = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9ea4f44demshe17e9d7c9a96b24p15b4bbjsn4a50180d1bfe",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response?.json();
      // console.log(json);
      setResult(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cd m-auto">
      <ButtonList />
      <div className=" flex flex-wrap justify-start m-auto w-[1200px]  pt-[24px] ">
        {result?.contents?.map((item) => {
          // console.log(item);
          return (
            <Link
              to={"/watch/" +item?.video?.videoId}
              key={item?.video?.videoId}
              onClick={()=>{
                handleSideNav();
              }}
            >
              <Card
                thumbnail={item?.video?.thumbnails[0]?.url}
                title={item?.video?.title}
                channelName={item?.video?.author?.title}
                channelId={item?.video?.author?.channelId}
                channellogo={item?.video?.author?.avatar[0]?.url}
                isVerified={item?.video?.author?.badges[0]}
                views={item?.video?.stats?.views}
                publishTime={item?.video?.publishedTimeText}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
