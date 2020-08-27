import React from "react";
import "./Subtotal.css";
import NumberFormat from "react-number-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotoal() {
  const [{ basket }] = useStateValue();
  console.log(getBasketTotal(basket));
  return (
    <div className="subtotal">
      <div className="subtotal_price">
        <p>Subtotal ({basket.length} item):</p>
        <strong>
          <NumberFormat
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
            renderText={(formattedValue) => (
              <strong className="s_price">{formattedValue}</strong>
            )}
          />
        </strong>
      </div>
      <small className="subtotal_gift">
        <input type="checkbox" /> This order contains a gift
      </small>
      <button>Procced to Checkout</button>
    </div>
  );
}

export default Subtotoal;
