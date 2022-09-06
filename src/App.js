import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavbar />
        <Home />
        <Main />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
