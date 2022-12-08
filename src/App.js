import "./App.css";
import { RecoilRoot } from "recoil";
import RoutesAll from "./routesAll";
import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

const App = () => {
  return (
    <div className="App">
      <RecoilRoot>
        <ScrollToTopButton />
        <RoutesAll />
      </RecoilRoot>
    </div>
  );
};

export default App;
