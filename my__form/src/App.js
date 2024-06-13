import "./App.css";
import Signup from "./Components/Signup.js";
import Home from "./Components/Home.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.js";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
