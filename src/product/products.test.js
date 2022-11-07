import { fireEvent, render, screen } from "@testing-library/react";
import { Products } from "./products";

describe("products component", () => {
  describe("Render a product", () => {
    it.skip("should render a list", () => {
      render(<Products />);
      const nameElement = screen.getByText(/Product list/i);
      expect(nameElement).toBeInTheDocument();
    });
  });

  describe("props", () => {
    describe("should render a list with correct amount of elements", () => {
      it.skip("empty", () => {
        render(<Products data={[]} />);
        const nameElement = screen.queryByText(/Product:/i);
        expect(nameElement).toBeNull();
      });

      it.skip("one", () => {
        render(<Products data={[{ name: "Random product" }]} />);
        const nameElement = screen.getAllByText(/Random product/i);
        expect(nameElement).toHaveLength(1);
      });

      it.skip("many", () => {
        const products = Array.from({ length: 20 }).map((_, index) => ({
          name: `Product ${index}`,
        }));
        render(<Products data={products} />);
        const nameElement = screen.getAllByText(/Product:/i);
        expect(nameElement).toHaveLength(20);
      });
    });
  });

  describe("crud", () => {
    it.skip("update", () => {
      const onUpdate = jest.fn();
      render(
        <Products
          data={[{ name: "Product a" }, { name: "Product b" }]}
          onUpdate={onUpdate}
        />
      );

      fireEvent.click(screen.queryAllByText("Update").at(1));
      expect(onUpdate.mock.calls).toHaveLength(1);
      const [firstCall] = onUpdate.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });
    it.skip("delete", () => {
      const onDelete = jest.fn();
      render(
        <Products
          data={[{ name: "Product a" }, { name: "Product b" }]}
          onDelete={onDelete}
        />
      );
      fireEvent.click(screen.queryAllByText("Delete").at(0));
      expect(onDelete.mock.calls).toHaveLength(1);
      const [firstCall] = onDelete.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product a");
    });

    it.skip("add to cart", () => {
      const onAddToCart = jest.fn();
      render(
        <Products
          data={[{ name: "Product a" }, { name: "Product b" }]}
          onAddToCart={onAddToCart}
        />
      );
      fireEvent.click(screen.queryAllByText("Add to cart").at(1));
      expect(onAddToCart.mock.calls).toHaveLength(1);
      const [firstCall] = onAddToCart.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product b");
    });
  });
});
