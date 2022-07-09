

import Header from "./components/header/Header";
import Home from "./components/Gotomenu/Home";
import Modal from "./components/modal/Modal";
import "./App.css";
import Card from "./components/card/Card";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import React, { useState } from "react";

export const UserContext = React.createContext();

function App() {
  const [hamburger, setHamburger] = useState(0);
  const [fries, setFries] = useState(0);
  const [coke, setCoke] = useState(0);
  return (
    <div className="App">
      <UserContext.Provider value={{ hamburger, fries, coke, setHamburger, setFries, setCoke }}>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path="/checkout" element={<Modal />} />
          </Routes>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;