import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeNavBar from "./components/HomeNavBar";
import MainNavBar from "./components/Main/MainNavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Contact from "./components/Contact";

const RoutesAll = () => (
  <Router>
    <Routes>
      {["/home", "/"].map((path) => {
        return (
          <Route
            key={path}
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
        key="main"
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
        key="contact"
        path={"contact"}
        element={
          <div>
            <MainNavBar />
            <Contact />
            <Footer />
          </div>
        }
      />
    </Routes>
  </Router>
);

export default React.memo(RoutesAll);
