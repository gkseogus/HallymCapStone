import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRountes";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        <Home />
        <Footer />
        {/* <AllRoutes /> */}
      </BrowserRouter>
    </div>
  );
}


export default App;
