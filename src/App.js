import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Body from "./components/Body";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import SearchOptions from "./components/SearchOptions";
import SearchPage from "./components/SearchPage";
import Channel from "./components/Channel/Channel";
import WatchVideo from "./components/WatchVideo/WatchVideo";

function App() {
  const isSearchVisible = useSelector((store) => store.cart.searchCard);
  const isMinimized = useSelector((store) => store.cart.minimizePlayer);
  const [results, setResults] = useState([]);
  const [search, setsearch] = useState("");
  const [videoId, setVideoId] = useState(null);
  const [badges, setBadges] = useState(null);

  console.log(videoId);
  return (
    <BrowserRouter>
      <div className="max-md:bg-black">
        <Header setResults={setResults} />
        <div className="flex justify-center">
          {isSearchVisible ? (
            <SearchOptions results={results} setsearch={setsearch} />
          ) : (
            <></>
          )}
        </div>
        <div className="flex max-md:block max-md:relative">
          <SideNav className="max-md:absolute" />
          <Routes>
            <Route path="/" element={<Body videoId={videoId} />} />
            {isMinimized ? (
              <Route path="/" element={<Body videoId={videoId} />} />
            ) : (
              <Route
                path="watch/:id"
                element={<WatchVideo setVideoId={setVideoId} badges={"LIVE"} />}
              />
            )}
            <Route path="home" element={<Body />} />
            <Route path="search/:id" element={<SearchPage search={search} />} />
            <Route path="channel/:id" element={<Channel home={true} />} />
            <Route path="channel/:id/Home" element={<Channel home={true} />} />
            <Route
              path="channel/:id/Playlist"
              element={<Channel home={false} playlist={true} />}
            />
            <Route
              path="channel/:id/Community"
              element={
                <Channel home={false} playlist={false} community={true} />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
