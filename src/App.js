import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./AllRountes";
import MainNavBar from "./components/MainNavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        {/* <AllRoutes /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
