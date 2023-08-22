import AddToCart from "../components/AddToCart";
import { cartData } from "../data/CartData";
import "../css/Cart.css";
import ContinueShopping from "../components/ContinueShopping";

const Cart = () => {
  const amount = 8000;
  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartData.length == 0 ? (
        <div className="cart-empty">
          <p>Your cart is currently empty</p>
          <ContinueShopping message={"Start shopping"} />
        </div>
      ) : (
        <>
          <div>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="Quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            {cartData?.map((order) => (
              <AddToCart
                key={order.phoneID}
                model={order.model}
                src={order.src}
                price={order.price}
                color={order.color}
                count={order.count}
              />
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart">Claer Cart</button>
            <div className="cart-checkout">
              <div className="subtotal">Subtotal</div>
              <span className="amount">{amount}</span>
              <p>Taxes and shopping calculated at checkout</p>
              <button>Check Out</button>
              <ContinueShopping message={"Continue Shopping"} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Cart;
