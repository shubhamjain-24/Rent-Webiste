import Home from "./Pages/Home/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import ShortList from "../src/Pages/Shotlist/SortList"



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shortlist' element={<ShortList/>} />

      </Routes>
    </Router>
  );
}

export default App;
