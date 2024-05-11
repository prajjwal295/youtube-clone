import React, { useEffect, useState } from "react";
import { API_KEY } from "../config/helper";
import { useDispatch, useSelector } from "react-redux";
import { filterCategory } from "../utils/HomeSlice";

const ButtonList = () => {
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();
  const filter = useSelector((store) => store.home.category);
  const dark = useSelector((store) => store.home.isDark);
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
      className="flex space-x-2 touch-pan-x overflow-x-scroll whitespace-nowrap line-clamp-1"
      style={{ WebkitScrollbar: "none" }}
    >
      
      {category?.items?.map((item) => (
        <label
          key={item?.id}
          className={`flex space-x-2 w-full h-8 font-medium items-center justify-center ${
            item?.id === filter
              ? ` text-sm rounded-md p-2 m-2 cursor-pointer ${
                  dark ? "bg-white text-black" : "bg-black text-white"
                }`
              : ` text-sm rounded-md p-2 m-2  cursor-pointer ${
                  dark
                    ? "bg-[rgb(39,39,39)] text-white"
                    : "bg-[rgb(242,242,242)] text-black"
                }`
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
