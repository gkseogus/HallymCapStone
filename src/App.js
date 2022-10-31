import "./App.css";
import { RecoilRoot } from "recoil";
import AllRountes from "./AllRountes";
import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <ScrollToTopButton />
        <AllRountes />
      </RecoilRoot>
    </div>
  );
}

export default App;
