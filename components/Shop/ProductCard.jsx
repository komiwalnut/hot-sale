import { useState } from "react";
import { useCart } from "../CartContext";
import { toast } from "react-toastify";
import bagIcon from "../../images/bag-icon.png";
import "./shop.css";

export default function ProductCard({ product }) {
  const [clicked, setClicked] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setClicked(true);
    addToCart(product);
    toast.success("Added to Bag!", {
      className: "toast-custom",
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
    });
    setTimeout(() => setClicked(false), 500);
  };

  return (
    <>
      {/* Product Card */}
      <div className="product-card" onClick={() => setShowDrawer(true)}>
        <div className="image-wrapper">
          <div className="discount-tag">-20%</div>
          <img
            src={product.image}
            alt={product.title}
            className="product-image"
          />
          <div
            className={`hover-icon ${clicked ? "clicked" : ""}`}
            onClick={handleAddToCart}
            role="button"
            aria-label="Add to cart"
          >
            <img src={bagIcon} alt="Add to Bag" className="bag-img" />
          </div>
        </div>

        <div className="product-info">
          <p className="product-price">
            <span className="original-price">₱{product.price}</span>
            <span className="sale-price">₱{product.price}</span>
          </p>
          <p className="product-name">{product.title}</p>
          <div className="product-rating">
            ★★★★★ <span className="reviews">{product.rating.rate}</span>
          </div>
        </div>
      </div>

      {/* Slide-in Drawer */}
      <div
        className={`drawer-overlay ${showDrawer ? "open" : ""}`}
        onClick={() => setShowDrawer(false)}
      >
        <div className="drawer" onClick={(e) => e.stopPropagation()}>
          <button className="drawer-close" onClick={() => setShowDrawer(false)}>
            ×
          </button>

          <img
            src={product.image}
            alt={product.title}
            className="drawer-image"
          />

          <div className="drawer-details">
            <div className="product-rating">
              ★★★★★ <span className="reviews">{product.rating.rate}</span>
            </div>

            <p className="drawer-category">{product.category}</p>
            <h2>{product.title}</h2>
            <p className="drawer-stock">Stock: {product.rating.count}</p>
            <p className="drawer-description">{product.description}</p>

            <div className="drawer-price-section">
              <span className="original-price">₱{product.price}</span>
              <span className="sale-price large">₱{product.price}</span>
            </div>

            <button
              className="add-to-cart-btn drawer-cart"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
