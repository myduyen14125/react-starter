import { fireEvent, render, screen } from "@testing-library/react";
import { Cart } from "./cart";

describe("cart component", () => {
  describe("Render a product", () => {
    it.skip("should render a list", () => {
      render(<Cart />);
      const nameElement = screen.getByText(/Cart list/i);
      expect(nameElement).toBeInTheDocument();
    });
  });

  describe("props", () => {
    describe("should render a list with correct amount of elements", () => {
      it.skip("empty", () => {
        render(<Cart data={[]} />);
        const nameElement = screen.queryByText(/Product:/i);
        expect(nameElement).toBeNull();

        const infoText = screen.queryByText(
          /Empty cart, please browse products first/i
        );
        expect(infoText).toBeInTheDocument();
      });

      it.skip("1", () => {
        render(<Cart data={[{ name: "Random product" }]} />);
        const nameElement = screen.getAllByText(/Random product/i);
        expect(nameElement).toHaveLength(1);
      });

      it.skip("5", () => {
        const products = Array.from({ length: 5 }).map((_, index) => ({
          name: `Product ${index}`,
        }));
        render(<Cart data={products} />);
        const nameElement = screen.getAllByText(/Product:/i);
        expect(nameElement).toHaveLength(5);
      });

      it.skip("should render a warning if there are too many products in cart", () => {
        const products = Array.from({ length: 10 }).map((_, index) => ({
          name: `Product ${index}`,
        }));
        render(<Cart data={products} />);
        const nameElement = screen.getAllByText(/Product:/i);
        expect(nameElement).toHaveLength(10);

        const warningElement = screen.getByText(
          /Too many products in you shopping cart, do you want to checkout now/i
        );
        expect(warningElement).toBeInTheDocument();
      });
    });
  });

  describe("cart", () => {
    it.skip("remove from cart", () => {
      const onRemoveFromCart = jest.fn();
      render(
        <Cart
          data={[{ name: "Product a" }, { name: "Product b" }]}
          onRemoveFromCart={onRemoveFromCart}
        />
      );
      fireEvent(screen.queryByText("Remove from cart"[1]));
      expect(onRemoveFromCart.mock.calls).toHaveLength(1);
      const [firstCall] = onRemoveFromCart.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });
  });
});
