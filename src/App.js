import "antd/dist/antd.css";
import Navbar from "./Components/Navbar/Navbar";
import Agents from "./Components/Agents/Agents";
import Maps from "./Components/Maps/Maps";
import Weapons from "./Components/Weapons/Weapons";
import HomePage from "./Components/HomePage";
import AgentsDetails from "./Components/AgentsDetails/AgentsDetails";
import "../src/Components/Navbar/navbar.scss";
import "./main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/agents" element={<Agents />}></Route>
          <Route path="/maps" element={<Maps />}></Route>
          <Route path="/weapons" element={<Weapons />}></Route>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/agents/:displayName" element={<AgentsDetails />}></Route>
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
