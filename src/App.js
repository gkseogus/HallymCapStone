import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRountes";
import MainNavBar from "./components/MainNavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        <Footer />
        {/* <AllRoutes /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
