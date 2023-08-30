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

const WatchVideo = ({ setVideoId }) => {
  console.log({w});
  const { id } = useParams();
  const dispatch = useDispatch();
  setVideoId(id);
  // console.log({badges})
  const [videoDetails, setVideoDetails] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const handleMinimization = () => {
    dispatch(setMinimization(true));
  };

  useEffect(() => {
    fetchVideoDetails();
  }, [id]);

  const fetchVideoDetails = async () => {
    const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
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
      setVideoDetails(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex max-sm:flex-col max-sm:max-w-[100vw] max-sm:text-white">
      <div className="mx-14 py-5 w-[900px] flex-[0.65] max-sm:max-w-[100vw] max-sm:mx-0 ">
        <iframe
          className="w-full h-[500px] max-sm:max-w-[100vw] max-sm:max-h-[240x]"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <div className="py-2 max-sm:max-w-[100vw] max-sm:my-2 ">
          <div>
            <h1 className="text-lg font-semibold">{videoDetails?.title}</h1>
          </div>
          <div className="flex justify-between mt-2 max-sm:max-w-[100vw]">
            <div className="flex justify-between  max-sm:max-w-[100vw]">
              <Link to={"/channel/" + videoDetails?.author?.channelId}>
                <img
                  src={videoDetails?.author?.avatar[0]?.url}
                  alt="channel"
                  className="rounded-full"
                />
              </Link>
              <div className="flex flex-col ml-4">
                <Link to={"/channel/" + videoDetails?.author?.channelId}></Link>
                <h1 className="text-lg font-semibold">
                  {videoDetails?.author?.title}{" "}
                  {videoDetails?.video?.author?.badges[0] ? (
                    <VscVerifiedFilled className="text-base" />
                  ) : (
                    <></>
                  )}
                </h1>
                <h1 className="text-xs">
                  {videoDetails?.author?.stats?.subscribersText}
                </h1>
                <Link to={"/channel/" + videoDetails?.author?.channelId}></Link>
              </div>
            </div>
            <div className="flex items-center flex-[0.5]">
              <div className="flex mr-4">
                <button className="h-10 w-[80px]  bg-[rgb(242,242,242)] flex items-center m-auto rounded-l-[20px]">
                  <BiLike className="text-2xl" />
                  <h1>{videoDetails?.stats?.likes}</h1>
                </button>
                <button className="h-10 w-[40px]  bg-[rgb(242,242,242)] rounded-r-[20px] border-l-2 ">
                  <BiDislike className="text-2xl" />
                </button>
              </div>
              <button className="h-10 w-full bg-[rgb(242,242,242)] flex items-center m-auto rounded-[20px] mr-4">
                <IoMdShareAlt className="text-2xl" />
                <h1 className="font-semibold">Share</h1>
              </button>
              <button className="h-10 w-full  bg-[rgb(242,242,242)] mr-4 flex items-center m-auto rounded-[20px]">
                <HiDownload className="text-2xl" />
                <h1 className="font-semibold">Download</h1>
              </button>
              <button className="h-10 w-full bg-[rgb(242,242,242)]  rounded-full">
                <BiDotsVerticalRounded className="text-2xl m-auto" />
              </button>
              <Link to="/">
                <button
                  className="h-10 w-full bg-[rgb(242,242,242)]  rounded-full"
                  onClick={() => handleMinimization()}
                >
                  <FiMinimize2 className="text-2xl m-auto" />
                </button>
              </Link>
            </div>
          </div>
          <div>Ditails</div>
        </div>
        {isVisible ? (
          <div className="border-2px  bg-[rgb(242,242,242)] rounded-md px-2 max-sm:bg-black">
            <div className="flex justify-between items-center m-2">
              <h1 className="text-xl font-bold">Comments :</h1>
              <RxCross2
                className="font-semibold text-3xl"
                onClick={() => setIsVisible(false)}
              />
            </div>
            <Comments id={id} cursor={null} />
          </div>
        ) : (
          <div
            className="border-2px  bg-[rgb(242,242,242)] rounded-md h-[64px] px-2 max-sm:bg-black"
            onClick={() => setIsVisible(true)}
          >
            <div className="flex justify-between items-center m-2">
              <h1 className="text-xl font-bold">Comments :</h1>
              {/* <Comments id={id} cursor={null} /> */}
              <BsArrowDownShort className="font-semibold text-3xl" />
            </div>
          </div>
        )}
      </div>
      <div className="flex-[0.35]">
        {videoDetails?.isLiveContent === true ? <LiveChat id={id} /> : null}
        <VideoRelatedContent id={id} />
      </div>
    </div>
  );
};

export default WatchVideo;

// AIzaSyCz_hjAQRfZo9 - gMHwssMvobdul_DZn4B0;
