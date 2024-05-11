import React from "react";
import { GoHome } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { BsFillBugFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { setSideNav } from "../utils/CartSlice";
const SideNav = () => {
  const isvisible = useSelector((store) => store.cart.sideNav);
  const dispatch = useDispatch();
  const dark = useSelector((store) => store.home.isDark);

  if (isvisible === false) {
    return null;
  }
  return (
    <div
      className={`flex flex-col w-[220px] p-2 max-md:w-full max-md:h-16 max-md:flex-row  max-md:justify-evenly max-md:fixed max-md:bottom-0 max-md:z-20 border-t-2 border-t-[rgb(96,96,96)] `}
    >
      <Link to="/home">
        <button
          className={`flex h-[40px] w-full m-1 cursor-pointer rounded-xl  items-center font-medium  max-md:bg-inherit max-md:flex-col ${
            dark
              ? "bg-[rgb(39,39,39)] text-white"
              : "bg-[rgb(242,242,242)] text-black"
          }`}
        >
          <GoHome className="text-xl m-4  max-md:m-0" />
          <h1 className="">Home</h1>
        </button>
      </Link>
      <button
        className={`flex h-[40px] w-full m-1 cursor-pointer rounded-xl  items-center font-medium  max-md:bg-inherit max-md:flex-col ${
          dark
            ? "bg-[rgb(39,39,39)] text-white"
            : "bg-[rgb(242,242,242)] text-black"
        }`}
      >
        <BsFillBugFill className="text-xl m-4  max-md:m-0" />
        <h1 className="">Shorts</h1>
      </button>
      <button
        className={`flex h-[40px] w-full m-1 cursor-pointer rounded-xl  items-center font-medium  max-md:bg-inherit  max-md:flex-col ${
          dark
            ? "bg-[rgb(39,39,39)] text-white"
            : "bg-[rgb(242,242,242)] text-black"
        }`}
      >
        <MdSubscriptions className="text-xl m-4  max-md:m-0" />
        <h1 className="">Subscriptions</h1>
      </button>
    </div>
  );
};

export default SideNav;
