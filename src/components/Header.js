import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoSearch } from "react-icons/go";
import { BsFillMicFill } from "react-icons/bs";
import { BiVideoPlus } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { disableSearchCard, enableSearchCard } from "../utils/CartSlice";
import { setSideNav } from "../utils/CartSlice";
import { cacheResults } from "../utils/SearchSlice";
// import { SiYoutubetv } from "react-icons/si";

const Header = ({ setResults }) => {
  const dispatch = useDispatch();
  // const searchValue = useSelector((store)=>store.cart.searchValue);

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

  return (
    <div className="flex bg-white items-center justify-between max-sm:max-w-full  ">
      <div className="flex flex-[3.5] max-sm:flex-[5]">
        <button onClick={() => handleSidenav()}>
          <RxHamburgerMenu className="text-2xl mx-4" />
        </button>
        <Link to="/">
          <img
            src="data:image/png;base64,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"
            alt="logo"
            className="h-16"
          />
        </Link>
      </div>
      <div className="flex flex-[5] max-sm:flex-[2]">
        <input
          type="text"
          value={search}
          className="h-10 w-[550px] rounded-l-full border-2 px-4 max-sm:hidden"
          placeholder="search"
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
          <button className="rounded-r-full bg-gray-100 border-2  border-l-0 w-16 h-10 max-sm:border-none max-sm:bg-white max-sm:w-auto ">
            <GoSearch className=" m-auto" />
          </button>
        </Link>
        <button className="  w-10 h-10 rounded-full ml-4">
          <BsFillMicFill className=" m-0  p-0 w-full h-5" />
        </button>
      </div>
      <div className="flex-[2.5] flex items-center ">
        <BiVideoPlus className="  w-full h-6" />
        <IoIosNotificationsOutline className="w-full h-6" />
      </div>
    </div>
  );
};

export default Header;
