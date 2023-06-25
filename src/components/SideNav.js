import React from 'react'
import { GoHome } from "react-icons/go";
import { MdSubscriptions } from "react-icons/md";
import { BsFillBugFill } from "react-icons/bs";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideNav = () => {

  const isvisible = useSelector((store) => store.cart.sideNav);

  if(isvisible === false){
    return null;
  }
  return (
    <div className="flex flex-col w-[240px] h-[100vh] p-2">
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

      <hr />
      <div>
        <h1>Library</h1>
      </div>
      <div>Subsrciptions</div>
      <div>Explore</div>
    </div>
  );
}

export default SideNav