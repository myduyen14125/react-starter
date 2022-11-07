import "./products.css";
import { Product } from "./product";

export const Products = (props) => {
  return (
    <div>
      <h1>Products</h1>
      {props.data.map((product) => (
        <Product
          key={product.id}
          {...product}
          onUpdate={props.onUpdate}
          onDelete={props.onDelete}
          onAddToCart={props.onAddToCart}
        ></Product>
      ))}
    </div>
  );
};
