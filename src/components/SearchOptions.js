import React from "react";
import { GoSearch } from "react-icons/go";
import { Link } from "react-router-dom";
import SearchPage from "./SearchPage";

const SearchOptions = ({ results, setsearch }) => {
  return (
    <div className="flex flex-col bg-white border-2 rounded-lg w-[550px] absolute m-auto ">
      {results?.map((item) => {
        return (
          <Link to={"/search/" + item}>
            <div className=" px-2 flex h-7 items-center hover:bg-[rgb(242,242,242)]" onClick={()=>{
                setsearch(item);
            }}>
              <GoSearch className="mr-5" /> {item}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchOptions;
