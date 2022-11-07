import { fireEvent, render, screen } from "@testing-library/react";
import { ProductModule } from "./product-module";

describe("product module", () => {
  const sample1 = {
    name: "Fujifilm xt30",
    price: 399,
    seller: "Tri",
    location: "Da Nang",
  };
  const sample2 = {
    name: "Cannon PowerShot G5 X Mark II",
    price: 1499,
    seller: "Tri",
    location: "Da Nang",
  };
  describe("create", () => {
    it.skip("should create a product", () => {
      render(<ProductModule></ProductModule>);

      fillInput("Name", sample1.name);
      fillInput("Price", sample1.price);
      fillInput("Seller", sample1.seller);
      fillInput("Location", sample1.location);

      fireEvent.click(screen.getByText("Submit"));

      // regex
      expect(screen.getByText(sample1.name)).toBeInTheDocument();

      fillInput("Name", sample2.name);
      fillInput("Price", sample2.price);
      fillInput("Seller", sample2.seller);
      fillInput("Location", sample2.location);

      fireEvent.click(screen.getByText("Submit"));

      expect(screen.getByText(sample2.name)).toBeInTheDocument();
    });
  });

  describe("update", () => {
    it.skip("should update a product's price", () => {
      render(<ProductModule initialProducts={[sample1]}></ProductModule>);

      fireEvent.click(screen.queryAllByText("Update").at(0));

      expect(screen.getByLabelText("Price")).toHaveProperty("value", "399");

      fillInput("Price", "599");

      expect(screen.getByLabelText("Price")).toHaveProperty("value", "599");

      fireEvent.click(screen.getByText("Submit"));

      expect(screen.getByLabelText("Name")).toHaveProperty("value", "");

      expect(screen.getByText("Price: 599")).toBeInTheDocument();
    });
  });

  describe("delete", () => {
    it.skip("should delete a product", () => {
      render(<ProductModule initialProducts={[sample1]}></ProductModule>);

      expect(screen.queryAllByText("Product: Fujifilm xt30")).toHaveLength(1);

      fireEvent.click(screen.queryAllByText("Delete")[0]);

      expect(screen.queryAllByText("Product: Fujifilm xt30")).toHaveLength(0);
    });
  });

  describe("cart", () => {
    it.skip("should add a product to cart", () => {
      render(
        <ProductModule initialProducts={[sample1, sample2]}></ProductModule>
      );
      fireEvent.click(screen.queryAllByText("Add to cart")[1]);
      expect(screen.queryAllByText(`Product: ${sample2.name}`)).toHaveLength(2);
    });

    it.skip("should remove a product from cart", () => {
      render(
        <ProductModule
          initialProducts={[sample1, sample2]}
          intiialCart={[sample2]}
        ></ProductModule>
      );
      fireEvent.click(screen.queryAllByText("Remove from cart")[0]);
      expect(screen.queryAllByText(`Product: ${sample2.name}`)).toHaveLength(1);
    });
  });
});

function fillInput(label, value) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}
