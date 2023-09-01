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
import logo from "../config/logo.png";
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
    <div className="flex bg-white items-center justify-between max-md:max-w-[100vw]  max-md:bg-black max-md:text-white border-b-2">
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
          className="h-10 w-[550px] rounded-l-full border-2 px-4 max-md:hidden"
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
          <button className="rounded-r-full bg-gray-100 border-2  border-l-0 w-16 h-10 max-md:rounded-full max-md:w-10 max-md:bg-black max-md:border-0">
            <GoSearch className="m-auto" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
