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
import store from "./utils/store";
import React, { useState } from "react";
import { Provider } from "react-redux";
import SearchOptions from "./components/SearchOptions";
import SearchPage from "./components/SearchPage";
import Channel from "./components/Channel";


function App() {
  const [results, setResults] = useState([]);
  const [search, setsearch] = useState("");

  console.log(results);
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header setResults={setResults} />
          <div className="flex  justify-center">
            {search ? (

              <SearchOptions results={results} setsearch={setsearch} className="hidden"/>
            ) : (
              <></>
            )}
          </div>
          <div className="flex">
            <SideNav className=""/>
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="home" element={<Body />} />
              <Route
                path="search/:id"
                element={<SearchPage search={search} />}
              />
              <Route
                path="channel/:id"
                element={<Channel  />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
