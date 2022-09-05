import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AllRoutesApp = () => (
  <Router>
    <Routes>
      {["/Home", "/"].map((path) => {
        return <Route key={uuidv4()} path={path} element={<div></div>} />;
      })}
      ;
    </Routes>
  </Router>
);

export default React.memo(AllRoutesApp);
