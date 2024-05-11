import React from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SearchPage from "./SearchPage";

import {
  disableSearchCard,
  enableSearchCard,
  setSearchValue,
} from "../utils/CartSlice";

const SearchOptions = ({ results, setsearch }) => {
  const dispatch = useDispatch();

  const showSearchCard = () => {
    dispatch(enableSearchCard());
  };
  const hideSearchCard = () => {
    dispatch(disableSearchCard());
  };

  const handleSearchValue = (item) => {
    dispatch(setSearchValue(item));
  };

  const dark = useSelector((store) => store.home.isDark);

  return (
    <div
      className={`flex flex-col  border-2 rounded-lg w-[550px] absolute m-auto z-10  max-md:w-full max-md:border-0 ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {results?.map((item) => {
        return (
          <Link to={"/search/" + item} key={item}>
            <div
              className={`px-2 flex h-7 items-center ${
                dark
                  ? "hover:bg-[rgb(39,39,39)] "
                  : "hover:bg-[rgb(242,242,242)]"
              }`}
              onClick={() => {
                setsearch(item);
                handleSearchValue(item);
                hideSearchCard();
              }}
              onMouseEnter={() => {
                showSearchCard();
              }}
              // onBlur={() => {
              //   hideSearchCard();
              // }}
            >
              <GoSearch className="mr-5" /> {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchOptions;
