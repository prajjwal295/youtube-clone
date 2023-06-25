import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import Card from "./Card";
import { Link } from "react-router-dom";

const Body = () => {
  const [result, setResult] = useState("");

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const url = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "762add6099msha41e68e8366a90ap135b65jsnd61ae5b350c2",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response?.json();
      console.log(json);
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
          console.log(item);
          return (
            <Link
              to={`/watch?v=${item?.video?.publishedTimeText}`}
              key={item?.video?.videoId}
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
