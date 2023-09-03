import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import { useSelector } from "react-redux/es/hooks/useSelector";
import Card from "./Card";
import { setMinimization } from "../utils/CartSlice";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { homeCacheResults } from "../utils/HomeSlice";
import { hideSideNav } from "../utils/CartSlice";
import { API_KEY } from "../config/helper";
import HomePageShimmer from "./HomeShimer";

const Body = ({ videoId }) => {
  const [result, setResult] = useState("");
  const [show, setShow] = useState(false);

  const filter = useSelector(store  =>store.home.category)

  const isMinimized = useSelector((store) => store.cart.minimizePlayer);

  // console.log({ videoId });
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
    const url = `https://youtube138.p.rapidapi.com/home/?hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&videoCategoryId=1&maxResults=25&regionCode=IN&key=${API_KEY}`
      );
      const json = await response?.json();
      setResult(json);
      console.log({ json });
      // dispatch(homeCacheResults(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="relative m-auto max-md:mx-0 max-md:mb-20 max-md:[100vw] max-md:text-white overflow-x-hidden">
      <div className="w-full">
        <ButtonList />
      </div>
      <div className=" flex flex-wrap justify-start m-auto w-[1200px] pt-[24px] max-md:flex-col max-md:w-[100vw] max-md:text-white max-md:pt-0 max-md:mb-20">
        {result ? (
          result?.items?.map((item) => {
            // console.log(item);
            return (
              <Link
                to={"/watch/" + item?.video?.videoId}
                key={item?.videoId}
                onClick={() => {
                  handleSideNav();
                  handleMinimization();
                }}
              >
                <Card
                  thumbnail={item?.snippet?.thumbnails?.standard?.url}
                  title={item?.snippet?.title}
                  channelName={item?.snippet?.channelTitle}
                  channelId={item?.snippet?.channelId}
                  channellogo={item?.video?.author?.avatar[0]?.url}
                  isVerified={item?.video?.author?.badges[0]}
                  views={item?.statistics?.viewCount}
                  publishTime={item?.video?.publishedTimeText}
                />
              </Link>
            );
          })
        ) : (
          <HomePageShimmer />
        )}
      </div>
      {/* {result?.cursorNext ? (
        <button
          className="bg-[rgb(96,96,96)] w-32 flex m-auto justify-center rounded-md"
          onClick={() => {
            setShow(true);
          }}
        >
          Load More
        </button>
      ) : (
        <></>
      )}

      {show ? <Body cursor={result?.cursorNext} /> : <></>} */}
    </div>
  );
};

export default Body;
