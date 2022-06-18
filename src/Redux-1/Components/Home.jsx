import React from "react";
import cart from "../Asset/cart.jpg";
import { connect } from "react-redux";
const Home = (props) => {
  // console.log("home", props.data);
  // console.log("home", props);

  return (
    <div>
      <div className="add-to-cart">
        <span style={{ color: "red", backgroundColor: "#eee" }}>
          {props.data.length}
        </span>
        <img src={cart} />
      </div>
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://images.pexels.com/photos/1156684/pexels-photo-1156684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </div>
        <div className="text-wrapper">
          <span>Iphone</span>
          <span>Price: $777</span>
        </div>
        <div className="btn-wrapper">
          <button
            onClick={() =>
              props.addToCartHandler({ price: 1000, name: "I phone 13 pro" })
            }
          >
            ADD TO CART
          </button>
          <button
            style={{ backgroundColor: "purple" }}
            onClick={() => props.removeToCartHandler({})}
          >
            Remove TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
