import React from "react";
import { Link } from "react-router-dom";
import "./home.css";
function Home() {
  return (
    <>
      <p className="food">Welcome to Food's</p>
      <p className="food">Kitchen</p>
      <Link to="/card">
        <button className="btnn">Go to menu</button>
      </Link>
    </>
  );
}
export default Home;
