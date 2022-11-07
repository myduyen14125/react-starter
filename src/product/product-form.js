import { useEffect } from "react";
import { useState } from "react";
import "./product-form.css";

export const ProductForm = (props) => {
  const [name, setName] = useState("");
  const onNameChange = (event) => setName(event.target.value);

  const [price, setPrice] = useState("");
  const onPriceChange = (event) => setPrice(event.target.value);

  const [location, setLocation] = useState("");
  const onLocationChange = (event) => setLocation(event.target.value);

  const [seller, setSeller] = useState("");
  const onSellerChange = (event) => setSeller(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();

    let id = Math.random();
    if (props.updatingProduct) {
      id = props.updatingProduct.id;
    }

    props.onSubmit({
      id,
      name,
      price,
      location: location || undefined,
      seller: seller || undefined,
    });

    setName("");
    setPrice("");
    setLocation("");
    setSeller("");
  };

  const onCancel = (event) => {
    event.preventDefault();
    setName("");
    setPrice("");
    setLocation("");
    setSeller("");

    props.onCancel();
  };

  console.log(props.updatingProduct);

  useEffect(() => {
    if (props.updatingProduct) {
      setName(props.updatingProduct.name ?? "");
      setPrice(props.updatingProduct.price ?? "");
      setLocation(props.updatingProduct.location ?? "");
      setSeller(props.updatingProduct.seller ?? "");
    }
  }, [props.updatingProduct]);

  return (
    <form className="product-form">
      <h1>Product form</h1>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={onNameChange}
      />
      <label htmlFor="price">Price</label>
      <input
        type="text"
        name="price"
        id="price"
        value={price}
        onChange={onPriceChange}
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        name="location"
        id="location"
        value={location}
        onChange={onLocationChange}
      />
      <label htmlFor="seller">Seller</label>
      <input
        type="text"
        name="seller"
        id="seller"
        value={seller}
        onChange={onSellerChange}
      />
      <button onClick={onSubmit}>Submit</button>
      <button onClick={onCancel}>Cancel</button>
    </form>
  );
};
