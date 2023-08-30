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
    <div className="flex flex-col w-[240px] min-h-[100vh] border-2 p-2">
      <Link to="/home">
        <button className="flex h-[45px] w-full m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibold">
          <GoHome className="text-2xl mr-4" />
          Home
        </button>
      </Link>
      <button className="flex h-[45px]  m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibol">
        <BsFillBugFill className="text-2xl mr-4" />
        Shorts
      </button>
      <button className="flex h-[45px]  m-1 cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibol">
        <MdSubscriptions className="text-2xl mr-4" />
        Subscriptions
      </button>
    </div>
  );
};

export default SideNav;
