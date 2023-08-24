import React, { useEffect, useState } from "react";
import { BiLike, BiDislike } from "react-icons/bi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";



const CommentContainer = ({ data, id }) => {
  const [show, setShow] = useState(false);

  const {
    content,
    stats,
    commentId,
    cursorReplies,
    author,
    publishedTimeText,
  } = data;
  return (
    <div className="my-6 flex ">
      <div className="w-[48px]">
        <img src={author?.avatar[0]?.url} className="rounded-full" />
      </div>
      <div className="ml-4 ">
        <div className="flex  items-center">
          <h1 className="font-semibold text-sm">{author?.title}</h1>
          <h1 className="text-xs ml-2">{publishedTimeText}</h1>
        </div>
        <h1 className="text-sm font-normal my-1">{content}</h1>

        <div className="flex w-full items-center">
          <h1 className="mr-3">
            <BiLike className="inline text-xl" /> {stats.votes}
          </h1>
          <h1>
            <BiDislike className="inline text-xl mr-3" />
          </h1>
          <h1 className="text-xs">Reply</h1>
        </div>
        {stats?.replies ? (
          <button
            className="text-blue-700 font-semibold mt-1 flex items-center justify-between hover:bg-blue-100 rounded-lg w-32 px-2"
            onClick={() => {
              show ? setShow(false) : setShow(true);
            }}
          >
            {show ? <BsChevronUp /> : <BsChevronDown />} {stats?.replies} replies
          </button>
        ) : (
          <></>
        )}

        {show ? <Comments id={id} cursor={cursorReplies} /> : <></>}
      </div>
    </div>
  );
};

const Comments = ({ id, cursor }) => {
  const [comments, setComments] = useState("");
  const [show, setShow] = useState(false);
  const [replies, setreplies] = useState("");
  // const [cursor, setCursor] = useState(null);

  useEffect(() => {
    fetchCommentData();
  }, [id]);

  const fetchCommentData = async () => {
    const url = `https://youtube138.p.rapidapi.com/video/comments/?id=${id}${
      cursor ? `&cursor=${cursor}` : ""
    }&hl=en&gl=US`;
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
      setComments(result);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="">
      <div className="">
        {comments?.comments?.map((comment) => {
          return <CommentContainer data={comment} id={id} />;
        })}
      </div>
      {/* <CommentContainer data={comments?.comments[0]} /> */}
      {comments?.cursorNext ? (
        <button
          className="text-blue-700 font-semibold mt-1 flex items-center justify-between hover:bg-blue-100 rounded-lg w-32 px-2 "
          onClick={() => {
            show ? setShow(false) : setShow(true);
          }}
        >
          {show ? <BsChevronUp />  : <BsChevronDown />}
          {show ? ("Show Less" ) : ("Show More")}
        </button>
      ) : (
        <></>
      )}

      {show ? <Comments id={id} cursor={comments?.cursorNext} /> : <></>}
    </div>
  );
};

export default Comments;
