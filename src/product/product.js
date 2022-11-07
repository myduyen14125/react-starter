import "./product.css";

export const Product = (props) => {
  const getProduct = () => {
    return {
      id: props.id,
      name: props.name,
      price: props.price,
      location: props.location,
      seller: props.seller,
    };
  };

  const onUpdate = () => {
    props.onUpdate(getProduct());
  };

  const onAddToCart = () => {
    props.onAddToCart(getProduct());
  };

  const onRemoveFromCart = () => {
    props.onRemoveFromCart(getProduct());
  };

  const onDelete = () => {
    props.onDelete({
      id: props.id,
    });
  };

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={props.img ?? "product-placeholder.jpg"} alt="" />
      </div>
      <div className="product-info">
        <div className="product-name">Product name: {props.name}</div>
        <div className="product-price">Price: {props.price}</div>
        <div className="product-location">
          Location: {props.location ?? "Unknown"}
        </div>
        <div className="product-seller">
          Seller: {props.seller ?? "Unknown"}
        </div>
        {props.quantity && (
          <div className="product-name">Quantity: {props.quantity}</div>
        )}
        {props.onUpdate && <button onClick={onUpdate}>Update</button>}
        {props.onDelete && <button onClick={onDelete}>Delete</button>}
        {props.onAddToCart && (
          <button onClick={onAddToCart}>Add to cart</button>
        )}
        {props.onRemoveFromCart && (
          <button onClick={onRemoveFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
};
