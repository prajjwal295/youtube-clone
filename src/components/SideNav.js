import React from 'react'
import { GoHome } from "react-icons/go";

const SideNav = () => {
  return (
    <div className="flex flex-col w-[240px] h-[100vh] p-2">
      <button className="flex h-[45px] cursor-pointer rounded-xl bg-[rgb(242,242,242)] items-center font-semibol">
        <GoHome className="text-2xl mr-4" />
        Home
      </button>
      <h1>Shorts</h1>
      <h1>Subscriptions</h1>
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