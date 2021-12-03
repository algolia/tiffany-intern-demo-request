import React, { useState } from "react";

// Import features from IS

// Import component
import Hits from "../../components/Hits/Hits";
import Map from "../Map/Map";
import { CustomFilters } from "../Filters/Filters";
import SearchBox from "../SearchBox/SearchBox";
import { CustomCurrentRefinements } from "../Filters/CurrentRefinement";

import { Stats } from 'react-instantsearch-dom';

const Homepage = () => {
  // REACT STATE
  const [filterAnim, setFilterAnim] = useState(true);
  const [isDynamicFactesOn, setIsDynamicFactesOn] = useState(false);
  return (
    <div>
      <SearchBox />
      <div className="current-stats">
        <CustomCurrentRefinements />
        <Stats />
      </div>
      <div className="homepage-content">
        <CustomFilters
          filterAnim={filterAnim}
          isDynamicFactesOn={isDynamicFactesOn}
          setIsDynamicFactesOn={setIsDynamicFactesOn}
        />
        <Hits />
      </div>

      {/* <Map /> */}
    </div>
  );
};

export default Homepage;
