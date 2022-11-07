import "./App.css";
import { ProductModule } from "./product/product-module";
import { products } from "./products-data";

function App() {
  return <ProductModule initialProducts={products}></ProductModule>;
}

export default App;
