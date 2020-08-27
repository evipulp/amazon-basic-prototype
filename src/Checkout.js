import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Cart is empty.</h2>
            <p>
              Your Shopping Cart lives to serve. Give it purpose--fill it with
              books, CDs, videos, DVDs, electronics, and more.
            </p>
            <Link to="/">Go to Home Page</Link>
          </div>
        ) : (
          <div>
            <h2 className="checkout_title">Your Shoping Basket</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">
        {basket.length > 0 && (
          <div className="checkout_right">
            <Subtotal />
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;
