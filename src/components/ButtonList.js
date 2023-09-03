import React, { useEffect, useState } from "react";
import { API_KEY } from "../config/helper";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory } from "../utils/HomeSlice";

const ButtonList = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.home.category);
  useEffect(() => {
    getVideoCategory();
  }, []);

  const getVideoCategory = async () => {
    const url = `https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&maxResults=25&regionCode=IN&key=${API_KEY}`;
    try {
      const response = await fetch(url);
      const json = await response?.json();
      setCategory(json);
      console.log({ json });
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheck = (id) => {
    dispatch(filterCategory(id));
  };
  return (
    <div
      className="flex space-x-2 touch-pan-y overflow-x-scroll whitespace-nowrap line-clamp-1"
      style={{ WebkitScrollbar: "none" }}
    >
      {category?.items?.map((item) => (
        <label
          key={item?.id}
          className={`flex space-x-2 w-full h-10 items-center justify-center ${
            item?.id === filter
              ? "bg-red-500 text-white font-semibold rounded-xl p-2 m-2 border-2 border-red-500 cursor-pointer"
              : "bg-white text-black font-semibold rounded-xl p-2 m-2 border-2 border-gray-300 cursor-pointer"
          }`}
        >
          <input
            type="checkbox"
            className="hidden"
            onClick={() => {
              handleCheck(item.id);
            }}
          />
          {item?.snippet?.title}
        </label>
      ))}
    </div>
  );
};

export default ButtonList;
