import { useState } from "react";
import { Cart } from "./cart";
import { ProductForm } from "./product-form";
import { Products } from "./products";

export const ProductModule = (props) => {
  const [products, setProducts] = useState(props.initialProducts ?? []);
  const [cart, setCart] = useState([]);

  const [updatingProduct, setUpdatingProduct] = useState(null);

  const onProductUpdateClick = (product) => {
    console.log("update this product", product);
    setUpdatingProduct(product);
  };

  const onProductDeleteClick = (product) => {
    const wantToDeleted = window.confirm("Do you want to delete?");
    if (wantToDeleted) {
      setProducts(
        products.filter((p) => {
          return p.id !== product.id;
        })
      );
    }
  };

  const onProductSubmit = (product) => {
    console.log(product);
    if (updatingProduct) {
      setProducts(
        products.map((p) => {
          if (p.id === product.id) {
            return { ...p, ...product };
          }
          return p;
        })
      );

      setUpdatingProduct(null);
    } else {
      setProducts([product, ...products]);
    }
  };

  const onProductFormCancel = () => {
    setUpdatingProduct(null);
  };

  const onAddToCart = (product) => {
    const existedProductsInCart = cart.filter((p) => {
      return product.id !== p.id;
    });

    const updatedProductInCart =
      cart.find((p) => {
        return product.id === p.id;
      }) ?? product;

    const productWithQuantity = {
      ...updatedProductInCart,
      quantity: (updatedProductInCart.quantity ?? 0) + 1,
    };
    setCart([productWithQuantity, ...existedProductsInCart]);
  };

  const onRemoveFromCart = (product) => {
    setCart(
      cart.filter((p) => {
        return p.id !== product.id;
      })
    );
  };

  return (
    <div className="App">
      <ProductForm
        onSubmit={onProductSubmit}
        updatingProduct={updatingProduct}
        onCancel={onProductFormCancel}
      ></ProductForm>
      <Cart data={cart} onRemoveFromCart={onRemoveFromCart}></Cart>
      <Products
        data={products}
        onUpdate={onProductUpdateClick}
        onDelete={onProductDeleteClick}
        onAddToCart={onAddToCart}
      ></Products>
    </div>
  );
};
