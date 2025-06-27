import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import "./shop.css";

// {data is similar to what we fetch from the API}
function Shop({ data }) {
  return (
    <section>
      <div className="bestseller-section">
        <h2 className="bestseller-title">Our Bestsellers</h2>
        <Link to="/marketplace">
          <p className="shop-link">Shop All Products →</p>
        </Link>
      </div>

      <div className="highlights-container">
        {/* every object from product.js*/}
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;

