import React, { useContext, useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { BsCartFill } from "react-icons/bs";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./head.css";
import { UserContext } from "../../App";
const Header = () => {
  const [mod, setMod] = useState(false);
  const { hamburger, fries, coke, setHamburger, setFries, setCoke } =
    useContext(UserContext);
  const hamburgerPrice = hamburger * 200;
  const friesPrice = fries * 100;
  const cokePrice = coke * 50;

  return (
    <div>
      <ul>
        <li>
          <ImSpoonKnife className="I" />
        </li>
        <li>
          <a href="/">
            <h5>Food's Restaurant</h5>
          </a>
        </li>
        <li>
          <BsCartFill className="cart" onClick={() => setMod(true)} />
        </li>
      </ul>
      <Modal show={mod}>
        <Modal.Header>Cart Items</Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <th style={{ pl: 2 }}>Item name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
            {coke !== 0 && (
              <tr>
                <td>Coke</td>
                <td>
                  <button
                    onClick={() => {
                      if (coke) setCoke(coke - 1);
                    }}
                    className="btn2"
                  >
                    -
                  </button>{" "}
                  {coke}{" "}
                  <button onClick={() => setCoke(coke + 1)} className="btn1">
                    +
                  </button>
                </td>
                <td>{cokePrice}</td>
              </tr>
            )}
            {hamburger !== 0 && (
              <tr>
                <td>Hamburger</td>
                <td>
                  <button
                    onClick={() => {
                      if (hamburger) setHamburger(hamburger - 1);
                    }}
                    className="btn2"
                  >
                    -
                  </button>{" "}
                  {hamburger}{" "}
                  <button
                    onClick={() => setHamburger(hamburger + 1)}
                    className="btn1"
                  >
                    +
                  </button>
                </td>
                <td>{hamburgerPrice}</td>
              </tr>
            )}
            {fries !== 0 && (
              <tr>
                <td>Fries</td>
                <td>
                  <button
                    onClick={() => {
                      if (fries) setFries(fries - 1);
                    }}
                    className="btn2"
                  >
                    -
                  </button>{" "}
                  {fries}{" "}
                  <button onClick={() => setFries(fries + 1)} className="btn1">
                    +
                  </button>
                </td>
                <td>{friesPrice}</td>
              </tr>
            )}
            <tr>
              <td>Total</td>
              <td></td>
              <td>{hamburgerPrice + friesPrice + cokePrice}</td>
            </tr>
          </table>
        </Modal.Body>
        <Modal.Footer>
          <Link to="/checkout">
            <Button onClick={() => setMod(false)}>Save and Checkout</Button>
          </Link>
          <Button onClick={() => setMod(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};
export default Header;
