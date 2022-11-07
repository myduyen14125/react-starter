import { fireEvent, render, screen } from "@testing-library/react";
import { ProductForm } from "./product-form";

describe("product form component", () => {
  describe("render the form", () => {
    it.skip("should render inputs with labels", () => {
      render(<ProductForm></ProductForm>);
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByLabelText("Name")).toBeInTheDocument();
      expect(screen.getByText("Price")).toBeInTheDocument();
      expect(screen.getByLabelText("Price")).toBeInTheDocument();
      expect(screen.getByText("Seller")).toBeInTheDocument();
      expect(screen.getByLabelText("Seller")).toBeInTheDocument();
      expect(screen.getByText("Location")).toBeInTheDocument();
      expect(screen.getByLabelText("Location")).toBeInTheDocument();
    });

    it.skip("should have price input as number only", () => {
      render(<ProductForm></ProductForm>);
      const input = screen.getByLabelText("Price");
      expect(input).toHaveAttribute("type", "number");
    });

    it.skip("should render submit button", () => {
      render(<ProductForm></ProductForm>);
      const button = screen.getByText("Submit");
      expect(button).toBeInTheDocument();
    });

    it.skip("should render cancel button", () => {
      render(<ProductForm></ProductForm>);
      const button = screen.getByText("Cancel");
      expect(button).toBeInTheDocument();
    });
  });

  describe("onSubmit", () => {
    it.skip("should receive formData on submit", () => {
      const onSubmit = jest.fn();
      render(<ProductForm onSubmit={onSubmit}></ProductForm>);

      fillInput("Name", "Product A");
      fillInput("Price", "400");
      fillInput("Seller", "Tri");
      fillInput("Location", "Da Nang");

      fireEvent.click(screen.getByText("Submit"));
      expect(onSubmit.mock.calls).toHaveLength(1);

      const [firstCall] = onSubmit.mock.calls;
      const [param] = firstCall;
      expect(param).toHaveProperty("name", "Product A");
      expect(param).toHaveProperty("price", 400);
      expect(param).toHaveProperty("seller", "Tri");
      expect(param).toHaveProperty("location", "Da Nang");
    });

    it.skip("should clean input values after submitting", () => {
      const onSubmit = jest.fn();
      const onCancel = jest.fn();
      render(<ProductForm onSubmit={onSubmit}></ProductForm>);
      fillInput("Name", "Product A");
      fillInput("Price", "400");
      fillInput("Seller", "Tri");
      fillInput("Location", "Da Nang");

      fireEvent.click(screen.getByText("Submit"));
      expect(onSubmit.mock.calls).toHaveLength(1);
      expect(onCancel.mock.calls).toHaveLength(0);

      expect(screen.getByLabelText("Name").value).toBe("");
      expect(screen.getByLabelText("Price").value).toBe("");
      expect(screen.getByLabelText("Seller").value).toBe("");
      expect(screen.getByLabelText("Location").value).toBe("");
    });

    it.skip("should clean input values when click cancel button", () => {
      const onSubmit = jest.fn();
      const onCancel = jest.fn();
      render(
        <ProductForm onSubmit={onSubmit} onCancel={onCancel}></ProductForm>
      );
      fillInput("Name", "Product A");
      fillInput("Price", "400");
      fillInput("Seller", "Tri");
      fillInput("Location", "Da Nang");

      fireEvent.click(screen.getByText("Cancel"));
      expect(onSubmit.mock.calls).toHaveLength(0);
      expect(onCancel.mock.calls).toHaveLength(1);

      expect(screen.getByLabelText("Name").value).toBe("");
      expect(screen.getByLabelText("Price").value).toBe("");
      expect(screen.getByLabelText("Seller").value).toBe("");
      expect(screen.getByLabelText("Location").value).toBe("");
    });
  });

  describe("validation", () => {
    it.skip("should validate name input", () => {
      const onSubmit = jest.fn();
      render(<ProductForm onSubmit={onSubmit}></ProductForm>);

      fillInput(
        "Name",
        "wopitjhw98trijhertohjrtiohjertohijtoerpihjrtehj8trhjerot9jhroithjer9thjro"
      );
      const warningLabel = screen.getByText(
        "Name should be within 32 characters."
      );
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate price input", () => {
      const onSubmit = jest.fn();
      render(<ProductForm onSubmit={onSubmit}></ProductForm>);

      fillInput("Price", "iu9e8ge");
      const warningLabel = screen.getByText("Price should be a number.");
      expect(warningLabel).toBeInTheDocument();
    });

    it.skip("should validate location input", () => {
      const onSubmit = jest.fn();
      render(<ProductForm onSubmit={onSubmit}></ProductForm>);

      fillInput("Location", "Nha Trang");
      const warningLabel = screen.getByText(
        "Location is either Da Nang, Ha Noi or Ho Chi Minh."
      );
      expect(warningLabel).toBeInTheDocument();
    });
  });
  describe("create user", () => {});
  describe("update user", () => {});
});

function fillInput(label, value) {
  fireEvent.change(screen.getByLabelText(label), { target: { value } });
}
