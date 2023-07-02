import React from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
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

  return (
    <div className="flex flex-col bg-white border-2 rounded-lg w-[550px] absolute m-auto ">
      {results?.map((item) => {
        return (
          <Link to={"/search/" + item} key={item}>
            <div
              className=" px-2 flex h-7 items-center hover:bg-[rgb(242,242,242)]"
              onClick={() => {
                setsearch(item);
                handleSearchValue(item);
                 showSearchCard();
              }}
              // onFocus={() => {
              //   showSearchCard();
              // }}
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
