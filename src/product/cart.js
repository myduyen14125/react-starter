import "./cart.css";
import { Product } from "./product";

export const Cart = (props) => {
  return (
    <div>
      <h1>Cart</h1>
      {props.data.map((product) => (
        <Product
          key={product.id}
          {...product}
          onRemoveFromCart={props.onRemoveFromCart}
        ></Product>
      ))}
    </div>
  );
};
