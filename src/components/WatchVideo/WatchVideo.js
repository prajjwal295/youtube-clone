import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VscVerifiedFilled } from "react-icons/vsc";
import { BiLike, BiDislike } from "react-icons/bi";
import { HiDownload } from "react-icons/hi";
import { IoMdShareAlt } from "react-icons/io";
import { FiMinimize2 } from "react-icons/fi";
import { BsArrowDownShort } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Comments from "./Comments";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMinimization } from "../../utils/CartSlice";
import VideoRelatedContent from "./VideoRelatedContent";
import LiveChat from "./LiveChat";
import { w } from "../../config/helper";
import { useSelector } from "react-redux";

const WatchVideo = ({ setVideoId }) => {
  console.log({ w });
  const { id } = useParams();
  const dispatch = useDispatch();
  setVideoId(id);
  // console.log({badges})
  const [videoDetails, setVideoDetails] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleMinimization = () => {
    dispatch(setMinimization(true));
  };

  const dark = useSelector((store) => store.home.isDark);

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "762add6099msha41e68e8366a90ap135b65jsnd61ae5b350c2",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log({ result });
      setVideoDetails(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex max-md:flex-col max-md:max-w-[100vw] ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="ml-10 mt-2 pb-5 w-[1280px] flex-[0.68] max-md:max-w-[100vw] max-md:mx-0">
        <iframe
          className="w-full h-[470px] max-md:max-w-[100vw] max-md:h-[300px]"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="py-2 max-md:max-w-[100vw] max-md:my-2 ">
          <div>
            <h1 className="text-lg font-semibold">{videoDetails?.title}</h1>
          </div>
          <div className="flex justify-between mt-2 max-md:max-w-[100vw] max-md:flex-col">
            <div className="flex justify-between max-md:max-w-[100vw] max-md:justify-start">
              <Link to={"/channel/" + videoDetails?.author?.channelId}>
                <img
                  src={videoDetails?.author?.avatar[0]?.url}
                  alt="channel"
                  className="rounded-full"
                />
              </Link>
              <div className="flex flex-col ml-4 max-md:flex-row max-md:items-center">
                <Link to={"/channel/" + videoDetails?.author?.channelId}>
                  <h1 className="text-lg font-semibold w-full max-md:mr-3">
                    {videoDetails?.author?.title}
                    {videoDetails?.video?.author?.badges[0] ? (
                      <VscVerifiedFilled className="text-base" />
                    ) : (
                      <></>
                    )}
                  </h1>
                </Link>
                <h1 className="text-xs">
                  {videoDetails?.author?.stats?.subscribersText}
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex mr-2 w-[120px] p-2">
                <button
                  className={`h-10 p-2 w-[60px] flex items-center m-auto rounded-l-[20px] ${
                    dark
                      ? "bg-[rgb(39,39,39)] text-white"
                      : "bg-[rgb(242,242,242)] text-black"
                  }`}
                >
                  <BiLike className="text-xl" />
                  {/* <h1>{videoDetails?.stats?.likes}</h1> */}
                </button>
                <button
                  className={`h-10 p-2 w-[60px]   rounded-r-[20px] border-l-2 ${
                    dark
                      ? "bg-[rgb(39,39,39)] text-white"
                      : "bg-[rgb(242,242,242)] text-black"
                  }`}
                >
                  <BiDislike className="text-xl" />
                </button>
              </div>
              <button
                className={`h-10 p-2 w-[130px] flex items-center justify-center m-auto rounded-[20px] mr-2 ${
                  dark
                    ? "bg-[rgb(39,39,39)] text-white"
                    : "bg-[rgb(242,242,242)] text-black"
                }`}
              >
                <IoMdShareAlt className="text-2xl" />
                <h1 className="font-semibold">Share</h1>
              </button>
              <button
                className={`h-10  p-2 w-[150px] mr-2 flex items-center justify-center m-auto rounded-[20px] ${
                  dark
                    ? "bg-[rgb(39,39,39)] text-white"
                    : "bg-[rgb(242,242,242)] text-black"
                }`}
              >
                <HiDownload className="text-2xl" />
                <h1 className="font-semibold">Download</h1>
              </button>
              <button
                className={`h-10 p-2 w-10 rounded-full ${
                  dark
                    ? "bg-[rgb(39,39,39)] text-white"
                    : "bg-[rgb(242,242,242)] text-black"
                }`}
              >
                <BiDotsVerticalRounded className="text-2xl m-auto" />
              </button>
            </div>
          </div>

          {/* <div
            className={`border-2px rounded-md px-2 my-1 ${
              dark
                ? "bg-[rgb(39,39,39)] text-white"
                : "bg-[rgb(242,242,242)] text-black"
            }`}
          >
            <div>
              <span>{videoDetails?.stats?.views} views</span>
              <span>{videoDetails?.publishedDate} views</span>
            </div>
          </div> */}
        </div>

        {isVisible ? (
          <div
            className={`border-2px rounded-md px-2 ${
              dark ? "bg-black text-white" : "bg-[rgb(242,242,242)] text-black"
            }`}
          >
            <div className="flex justify-between items-center m-2">
              <h1 className="text-lg font-medium">
                {videoDetails?.stats?.comments} Comments :
              </h1>
              <RxCross2
                className="font-semibold text-3xl cursor-pointer"
                onClick={() => setIsVisible(false)}
              />
            </div>
            <Comments id={id} cursor={null} />
          </div>
        ) : (
          <div
            className={`border-2px   rounded-md h-[64px] px-2 ${
              dark
                ? "bg-[rgb(39,39,39)] text-white"
                : "bg-[rgb(242,242,242)] text-black"
            } `}
            onClick={() => setIsVisible(true)}
          >
            <div className="flex justify-between items-center m-2">
              <h1 className="text-lg font-medium">
                {" "}
                {videoDetails?.stats?.comments} Comments :
              </h1>
              {/* <Comments id={id} cursor={null} /> */}
              <BsArrowDownShort className="font-semibold text-3xl cursor-pointer" />
            </div>
          </div>
        )}
      </div>
      <div className="flex-[0.30]">
        {videoDetails?.isLiveContent === true ? <LiveChat id={id} /> : null}
        <VideoRelatedContent id={id} />
      </div>
    </div>
  );
};

export default WatchVideo;

// AIzaSyCz_hjAQRfZo9 - gMHwssMvobdul_DZn4B0;
