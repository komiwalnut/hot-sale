import { useState } from "react";
import { useCart } from "./CartContext";
import ConfirmModal from "./ConfirmModal";
import "./cartpage.css";

import trashIcon from "../images/delete-cart-icon.jpg";

function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const [showConfirm, setShowConfirm] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = 0;
  const delivery = 40;
  const total = subtotal - discount + delivery;

  const openConfirm = (id) => {
    setItemToDelete(id);
    setShowConfirm(true);
  };

  const handleConfirmDelete = () => {
    if (itemToDelete === "all") {
      cartItems.forEach((item) => removeFromCart(item.id));
    } else {
      removeFromCart(itemToDelete);
    }
    setShowConfirm(false);
    setItemToDelete(null);
  };

  const handleCancel = () => {
    setShowConfirm(false);
    setItemToDelete(null);
  };

  return (
    <div className="cart-page">
      <h1 className="cart-title">Shopping Cart</h1>

      {cartItems.length > 0 && (
        <div className="delete-all-container">
          <button className="delete-all-btn" onClick={() => openConfirm("all")}>
            Remove All Items
          </button>
        </div>
      )}

      <div className="cart-content">
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty! Shop products to add items.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>₱{item.price.toFixed(2)}</p>
                  <div className="quantity-controls">
                    <button
                      onClick={() => updateQuantity(item.id, (qty) => qty - 1)}
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, (qty) => qty + 1)}>
                      +
                    </button>
                  </div>
                </div>
                <button className="remove-btn" onClick={() => openConfirm(item.id)}>
                  <img src={trashIcon} alt="Remove" className="trash-icon" />
                </button>
              </div>
            ))
          )}
        </div>

        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-line">
            <span>Subtotal</span>
            <span>₱{subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Discount</span>
            <span>₱{discount.toFixed(2)}</span>
          </div>
          <div className="summary-line">
            <span>Delivery Fee</span>
            <span>₱{delivery.toFixed(2)}</span>
          </div>
          <hr />
          <div className="summary-line total">
            <span>Total</span>
            <span>₱{total.toFixed(2)}</span>
          </div>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>

      {showConfirm && (
        <ConfirmModal
          message={
            itemToDelete === "all"
              ? "Are you sure you want to remove all items from your cart?"
              : "Are you sure you want to remove this item from your cart?"
          }
          onCancel={handleCancel}
          onConfirm={handleConfirmDelete}
        />
      )}
    </div>
  );
}

export default CartPage;
