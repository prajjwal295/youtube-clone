import React, { useState , useEffect} from 'react'
import VideoRelatedCard from "./VideoRelatedCard";
import { useDispatch } from 'react-redux';
import { hideSideNav } from '../../utils/CartSlice';
import { Link } from 'react-router-dom';
import PlaylistCard from '../Channel/PlaylistCard';

const VideoRelatedContent = ({id}) => {

      const dispatch = useDispatch();

      const handleSideNav = () => {
        dispatch(hideSideNav());
      };

    const [content , setContent] = useState("");

     useEffect(() => {
       fetchVideoRelatedDetails();
     }, [id]);

     const fetchVideoRelatedDetails = async () => {
       const url =
         `https://youtube138.p.rapidapi.com/video/related-contents/?id=${id}&hl=en&gl=US`;
       const options = {
         method: "GET",
         headers: {
           "X-RapidAPI-Key":
             "762add6099msha41e68e8366a90ap135b65jsnd61ae5b350c2",
           "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
         },
       };

       try {
         const response = await fetch(url, options);
         const result = await response.json();
         console.log(result);
         setContent(result);
       } catch (error) {
         console.error(error);
       }
     };
  return (
    <div className="">
      {content?.contents?.map((item) => {
        return item?.type === "video" ? (
          <Link
            to={"/watch/" + item?.video?.videoId}
            key={item?.video?.videoId}
            onClick={() => {
              handleSideNav();
            }}
          >
            <VideoRelatedCard
              thumbnail={item?.video?.thumbnails[0]?.url}
              title={item?.video?.title}
              channelName={item?.video?.author?.title}
              channellogo={item?.video?.author?.avatar[0]?.url}
              isVerified={item?.video?.author?.badges[0]}
              views={item?.video?.stats?.views}
              publishTime={item?.video?.publishedTimeText}
              description={item?.video?.descriptionSnippet}
              channelId={item?.video?.author?.channelId}
            />
          </Link>
        ) : (
          <PlaylistCard
            thumbnail={item?.playlist?.thumbnails[0]?.url}
            title={item?.playlist?.title}
            videoCount={item?.playlist?.stats?.videos}
          />
        );
      })}
    </div>
  );
};


export default VideoRelatedContent