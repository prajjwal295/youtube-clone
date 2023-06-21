import React, { useEffect, useState } from "react";
import ButtonList from "./ButtonList";
import Card from "./Card";

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
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response.json();
      console.log(json);
      setResult(json);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className=" m-auto">
      <ButtonList />
      <div className=" flex flex-wrap justify-start m-auto w-[1200px]  pt-[24px] ">
        {result?.contents?.map((item) => {
          // console.log(item);
          return (
            <Card
              thumbnail={item.video.thumbnails[0].url}
              title={item.video.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Body;
