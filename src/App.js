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
            {results ? (
              <SearchOptions results={results} setsearch={setsearch} />
            ) : (
              <></>
            )}
          </div>
          <div className="flex">
            <SideNav />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route
                path="search/:id"
                element={<SearchPage search={search} />}
              />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
