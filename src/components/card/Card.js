import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./card.css";
import { UserContext } from "../../App";
function Card() {
  const { hamburger, fries, coke, setHamburger, setFries, setCoke } = useContext(UserContext);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <div className="card">
              <img
                className="card-img-top"
                src="https://media.istockphoto.com/photos/hamburger-with-cheese-and-french-fries-picture-id1188412964?k=20&m=1188412964&s=612x612&w=0&h=Ow-uMeygg90_1sxoCz-vh60SQDssmjP06uGXcZ2MzPY="
                alt="Card image cap"
              />
              <div className="card-body">
                <p>Hamburger</p>
                <p>Price: 200</p>
                <p>Total:{hamburger}</p>
                <p>Cost(INR):{hamburger * 200} </p>
                <button onClick={() => setHamburger(hamburger + 1)} className="btn1">
                  +
                </button>
                <button onClick={() => {
                  if (hamburger) setHamburger(hamburger - 1);
                }} className="btn2">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <div className="card">
              <img
                className="card-img-top"
                src="https://static.toiimg.com/thumb/54659021.cms?imgsize=275086&width=800&height=540"
                alt="Card image cap"
              />
              <div className="card-body">
                <p>Fries</p>
                <p>Price: 100</p>
                <p>Total:{fries}</p>
                <p>Cost(INR):{fries * 100} </p>
                <button onClick={() => setFries(fries + 1)} className="btn1">
                  +
                </button>
                <button onClick={() => {
                  if (fries) setFries(fries - 1);
                }
                } className="btn2">
                  -
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm">
            {" "}
            <div className="card">
              <img
                className="card-img-top"
                src="https://www.eatthis.com/wp-content/uploads/sites/4/media/images/ext/108098914/coca-cola-soda-ice.jpg?quality=82&strip=1"
                alt="Card image cap"
                height="280px"
              />
              <div className="card-body">
                <p>Cock</p>
                <p>Price: 50</p>
                <p>Total:{coke}</p>
                <p>Cost(INR):{coke * 50} </p>
                <button onClick={() => setCoke(coke + 1)} className="btn1">
                  +
                </button>
                <button onClick={() => {
                  if (coke) setCoke(coke - 1)
                }} className="btn2">
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;