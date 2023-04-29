import { CartIcon } from "../assets/images/icon-cart.svg";
import "./Button.style.css";

const Button = () => {
  return (
    <div>
      <button className="cart-button" type="submit">
        <CartIcon /> <span className="button-text"> Add to Cart</span>
      </button>
    </div>
  );
};

export default Button;
