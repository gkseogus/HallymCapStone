import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import HomeNavBar from "./components/HomeNavBar";
import MainNavBar from "./components/Main/MainNavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";

const AllRoutesApp = () => (
  <Router>
    <Routes>
      {["/home", "/"].map((path) => {
        return (
          <Route
            key={uuidv4()}
            path={path}
            element={
              <div>
                <HomeNavBar />
                <Home />
                <Footer />
              </div>
            }
          />
        );
      })}
      ;
      <Route
        key={uuidv4()}
        path={"main"}
        element={
          <div>
            <MainNavBar />
            <Main />
            <Footer />
          </div>
        }
      />
      <Route
        key={uuidv4()}
        path={"contact"}
        element={
          <div>
            <MainNavBar />
            <Footer />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default React.memo(AllRoutesApp);
