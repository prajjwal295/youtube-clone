import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { BsFillMicFill } from "react-icons/bs";
import { BsArrowLeftShort } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { BsSun } from "react-icons/bs";
import { BsMoon } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { disableSearchCard, enableSearchCard } from "../utils/CartSlice";
import { setSideNav } from "../utils/CartSlice";
import { cacheResults } from "../utils/SearchSlice";
import logo from "../config/logo.png";
import { setTheme } from "../utils/HomeSlice";
// import { SiYoutubetv } from "react-icons/si";

const Header = ({ setResults }) => {
  const mdWidth = 768;
  const [screenSize, setScreen] = useState(window.innerWidth);
  const dispatch = useDispatch();
  const [bar, showBar] = useState(false);
  window.onresize = function (event) {
    setScreen(window.innerWidth);
  };

  const dark = useSelector((store) => store.home.isDark);

  const handleSidenav = () => {
    dispatch(setSideNav());
  };
  const showSearchCard = () => {
    dispatch(enableSearchCard());
  };
  const hideSearchCard = () => {
    dispatch(disableSearchCard());
  };

  const searchCache = useSelector((store) => store.search);

  const [search, setSearch] = useState("");
  // console.log(search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[search]) {
        setResults(searchCache[search]);
      } else {
        autoComplete();
      }
    }, 200);
    // Concept of Debouncing
    // Reffer Notes

    return () => {
      clearTimeout(timer);
    };
    // this return function will be called during the unmounting phase of the useEffect
    // Reffer Notes
  }, [search]);

  const autoComplete = async () => {
    // console.log(search);
    // console.log(value);
    const url = `https://youtube138.p.rapidapi.com/auto-complete/?q=${search}&hl=en&gl=US`;
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "a9c441efd3mshcf2c42b30558159p190064jsn4689fc18da53",
        "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const json = await response?.json();
      setResults(json?.results);
      dispatch(
        cacheResults({
          [search]: json?.results,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  return bar && screenSize <= mdWidth ? (
    <div
      className={`w-full h-16 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className={`px-4 py-2 flex items-center justify-evenly `}>
        <button
          className="rounded-full h-10  w-10 "
          onClick={() => {
            showBar(false);
          }}
        >
          <BsArrowLeftShort className="m-auto text-xl" />
        </button>
        <input
          type="text"
          value={search}
          className={`h-6 w-[80vw] rounded-full px-4 ${
            dark ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => {
            showSearchCard();
          }}
          onBlur={() => {
            hideSearchCard();
          }}
        />

        <Link to={"/search/" + search}>
          <button
            className={`rounded-full  h-10  w-10 ${
              dark ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            <GoSearch className="m-auto" />
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <div
      className={`flex h-16  items-center justify-between max-md:max-w-[100vw] ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex">
        <button onClick={() => handleSidenav()}>
          <RxHamburgerMenu className="text-2xl mx-4" />
        </button>
        <Link to="/">
          <img src={logo} alt="logo" className="h-16 p-5" />
        </Link>
      </div>
      <div className="flex">
        <input
          type="text"
          value={search}
          className={`h-10 w-[550px] rounded-l-full  px-4 max-md:hidden border-2 ${
            dark ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onFocus={() => {
            showSearchCard();
          }}
          onBlur={() => {
            hideSearchCard();
          }}
        />

        <Link to={"/search/" + search}>
          <button
            className={`rounded-r-full  border-2  border-l-0 w-16 h-10 max-md:rounded-full max-md:w-10 max-md:border-0 ${
              dark ? "bg-black " : "bg-gray-100"
            }`}
            onClick={() => {
              showBar(true);
            }}
          >
            <GoSearch className="m-auto" />
          </button>
        </Link>
      </div>
      <div className="pr-10">
        {dark ? (
          <button
            onClick={() => {
              dispatch(setTheme(false));
            }}
          >
            <BsSun />
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch(setTheme(true));
            }}
          >
            <BsMoon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
