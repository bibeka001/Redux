import React from "react";
import cart from "../Asset/cart.jpg";
import { connect } from "react-redux";
const Header = (props) => {
  console.log("home", props.data);
  return (
    <div>
      <div className="add-to-cart">
        <span style={{ color: "red", backgroundColor: "#eee" }}>
          {props.data.length}
        </span>
        <img src={cart} />
      </div>
    </div>
  );
};

export default Header;
