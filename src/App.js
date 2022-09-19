import "./App.css";
import AllRountes from "./AllRountes";
import React from "react";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <div className="App">
      <ScrollToTopButton />
      <AllRountes />
    </div>
  );
}

export default App;
