const AddToCart = (props) => {
  const { model, src, price, color, count } = props;
  return (
    <div className="cart-item">
      <div className="cart-product">
        <img src={src} alt={model} />
        <div>
          <h3>{model}</h3>
          <p>{color}</p>
          <button>Remove</button>
        </div>
      </div>
      <div className="cart-product-price">{price}</div>
      <div className="cart-product-quantity">
        <button>-</button>
        <div className="count">{count}</div>
        <button>+</button>
      </div>
      <div className="cart-product-total-price">{price * count}</div>
    </div>
  );
};
export default AddToCart;
