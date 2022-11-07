import { fireEvent, render, screen } from "@testing-library/react";
import { Product } from "./product";

describe("product component", () => {
  describe("render a product", () => {
    it.skip("should render a product with name", () => {
      render(<Product />);
      const nameElement = screen.getByText(/Product:/i);
      expect(nameElement).toBeInTheDocument();
    });

    it.skip("should render a product with price, location and seller", () => {
      render(<Product />);
      const priceElement = screen.getByText(/Price:/i);
      expect(priceElement).toBeInTheDocument();
      const sellerElement = screen.getByText(/Seller:/i);
      expect(sellerElement).toBeInTheDocument();
      const locationElement = screen.getByText(/Location:/i);
      expect(locationElement).toBeInTheDocument();
    });
  });

  describe("props", () => {
    it.skip("should render a product with custom props", () => {
      render(
        <Product
          name="Product b"
          price={238}
          seller="Dung"
          location="Da Nang"
        />
      );

      const productNameElement = screen.getByText(/Product b/i);
      expect(productNameElement).toBeInTheDocument();
      const priceElement = screen.getByText(/238/i);
      expect(priceElement).toBeInTheDocument();
      const sellerElement = screen.getByText(/Dung/i);
      expect(sellerElement).toBeInTheDocument();
      const locationElement = screen.getByText(/Da Nang/i);
      expect(locationElement).toBeInTheDocument();
    });
  });

  describe("crud", () => {
    it.skip("should render a product with a update button", () => {
      const onUpdate = jest.fn();
      render(
        <Product
          name="Product b"
          price={238}
          seller="Tri"
          location="Da Nang"
          onUpdate={onUpdate}
        />
      );

      const updateButton = screen.getByText("Update");
      expect(updateButton).toBeInTheDocument();
      fireEvent.click(updateButton);
      expect(onUpdate.mock.calls).toHaveLength(1);
      const [firstCall] = onUpdate.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });

    it.skip("should render a product with a delete button", () => {
      const onDelete = jest.fn();
      render(
        <Product
          name="Product b"
          price={238}
          seller="Tri"
          location="Da Nang"
          onDelete={onDelete}
        />
      );

      const deleteButton = screen.getByText("Delete");
      expect(deleteButton).toBeInTheDocument();
      fireEvent.click(deleteButton);
      expect(onDelete.mock.calls).toHaveLength(1);
      const [firstCall] = onDelete.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });

    it.skip("should render a product with an add to cart button", () => {
      const onAddToCart = jest.fn();
      render(
        <Product
          name="Product b"
          price={238}
          seller="Tri"
          location="Da Nang"
          onAddToCart={onAddToCart}
        />
      );

      const addToCartButton = screen.getByText("Add to cart");
      expect(addToCartButton).toBeInTheDocument();
      fireEvent.click(addToCartButton);
      expect(onAddToCart.mock.calls).toHaveLength(1);
      const [firstCall] = onAddToCart.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });

    it.skip("should render a product with a remove from cart button", () => {
      const onRemoveFromCart = jest.fn();
      render(
        <Product
          name="Product b"
          price={238}
          seller="Tri"
          location="Da Nang"
          onRemoveFromCart={onRemoveFromCart}
        />
      );

      const addToCartButton = screen.getByText("Remove from cart");
      expect(addToCartButton).toBeInTheDocument();
      fireEvent.click(addToCartButton);
      expect(onRemoveFromCart.mock.calls).toHaveLength(1);
      const [firstCall] = onRemoveFromCart.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });
  });
});
