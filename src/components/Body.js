import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./Card";
import { setMinimization } from "../utils/CartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { homeCacheResults } from "../utils/HomeSlice";
import { hideSideNav } from "../utils/CartSlice";

const Body = ({ videoId }) => {
  const [result, setResult] = useState("");

  const isMinimized = useSelector((store) => store.cart.minimizePlayer);

  console.log({ videoId });
  const dispatch = useDispatch();

  const handleMinimization = () => {
    dispatch(setMinimization(false));
  };

  const handleSideNav = () => {
    dispatch(hideSideNav());
  };

  // const homeCache = useSelector((store) => store.home);
  // console.log({ homeCache });

  useEffect(() => {
    // if (homeCache?.homeCache?.Api) {
    //   setResult(homeCache?.homeCache?.Api);
    // } else {
      getApi();
    // }
  }, []);

  const getApi = async () => {
    const url = "https://youtube138.p.rapidapi.com/home/?hl=en&gl=US";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response?.json();
      setResult(json);
      // dispatch(homeCacheResults(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="cd m-auto relative">
      <ButtonList />
      <div className=" flex flex-wrap justify-start m-auto w-[1200px]  pt-[24px] max-sm:flex-col max-sm:w-[100vw] max-sm:text-white">
        {result?.contents?.map((item) => {
          // console.log(item);
          return (
            <Link
              to={"/watch/" + item?.video?.videoId}
              key={item?.video?.videoId}
              onClick={() => {
                handleSideNav();
                handleMinimization();
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
      {videoId && (
        <div className="fixed bottom-2 right-2 rounded-md">
          <iframe
            className="h-[250px] w-[370px] rounded-md"
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Body;
