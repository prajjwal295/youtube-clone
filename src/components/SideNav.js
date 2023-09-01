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

  if (isvisible === false) {
    return null;
  }
  return (
    <div className="flex flex-col w-[240px]  p-2 max-md:w-full max-md:h-16 max-md:flex-row  max-md:justify-evenly max-md:fixed max-md:bottom-0 max-md:z-20 max-md:bg-black border-t-2 border-t-[rgb(96,96,96)]">
      <Link to="/home">
        <button className="flex h-[45px] w-full m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibold  max-md:bg-inherit max-md:text-white max-md:flex-col">
          <GoHome className="text-2xl mr-4  max-md:m-0" />
          <h1 className="">Home</h1>
        </button>
      </Link>
      <button className="flex h-[45px]  m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibol  max-md:bg-inherit max-md:text-white max-md:flex-col">
        <BsFillBugFill className="text-2xl mr-4  max-md:m-0" />
        <h1 className="">Shorts</h1>
      </button>
      <button className="flex h-[45px]  m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibol  max-md:bg-inherit max-md:text-white max-md:flex-col">
        <MdSubscriptions className="text-2xl mr-4  max-md:m-0" />
        <h1 className="">Subscriptions</h1>
      </button>
    </div>
  );
};

export default SideNav;
