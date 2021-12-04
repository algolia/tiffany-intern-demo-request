import React from "react";
import { InstantSearch } from "react-instantsearch-dom";
import algoliasearch from "algoliasearch/lite";

// Import components
import Header from "./components/Header/Header";
import Homepage from "./Pages/Homepage";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

//CSS / SCSS

import "./assets/scss/index.scss";

const App = () => {
  const searchClient = algoliasearch(window.appID, window.key);
  return (
    <div>
      <InstantSearch searchClient={searchClient} indexName={window.index}>
        <div className="general-wrapper">
          <SideBar />
          <div className='filters-hits'>
            <Header />
            <Homepage />
          </div>
        </div>
        <Footer />
      </InstantSearch>
    </div>
  );
};

export default App;
