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
  const [show, setShow] = useState(false);

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
      const response = await fetch(url, options);
      const json = await response?.json();
      setResult(json);
      console.log({ json });
      // dispatch(homeCacheResults(json));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" m-auto relative  max-md:mx-0 max-md:mb-20 max-md:[100vw] max-md:text-white">
      <ButtonList />
      <div className=" flex flex-wrap justify-start m-auto w-[1200px] pt-[24px] max-md:flex-col max-md:w-[100vw] max-md:text-white max-md:pt-0 max-md:mb-20">
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
      {/* {videoId && (
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
      )} */}
    </div>
  );
};

export default Body;
