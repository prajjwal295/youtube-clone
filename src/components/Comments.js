import React, { useEffect, useState } from 'react'

const Comments = ({id}) => {


    const [comments , setComments] = useState("");

    useEffect(()=>{
        fetchCommentData();
    },[]);

    const fetchCommentData = async()=>{
        const url =
          "https://youtube138.p.rapidapi.com/video/comments/?id=kJQP7kiw5Fk&hl=en&gl=US";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "a9ea4f44demshe17e9d7c9a96b24p15b4bbjsn4a50180d1bfe",
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
    }
  return (
    <div>Comments</div>
  )
}

export default Comments