import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Home />
        <Main />
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
