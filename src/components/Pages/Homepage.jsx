import React from "react";

// Import features from IS
import { Configure } from "react-instantsearch-dom";

// Import component
import Hits from "../../components/Hits/Hits";
import Map from "../../components/Map/Map";
import SearchBox from "../SearchBox/SearchBox";
import SideBar from "../SideBar/SideBar";

const Homepage = () => {
  return (
    <div>
      <SearchBox />
      <SideBar />
      <Hits />
      {/* <Map /> */}
    </div>
  );
};

export default Homepage;
