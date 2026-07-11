import React, { useMemo, useState } from "react";
import "./style.css";

const initialItems = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 89,
    quantity: 1,
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    price: 129,
    quantity: 2,
  },
];

export default function ShoppingCartDrawer({
  title = "Shopping Cart",
  initialCart = initialItems,
}) {
  const [cart, setCart] = useState(initialCart);

  const updateQuantity = (id, delta) => {
    setCart((items) =>
      items
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.max(1, item.quantity + delta),
              }
            : item
        )
    );
  };

  const removeItem = (id) => {
    setCart((items) => items.filter((item) => item.id !== id));
  };

  const total = useMemo(
    () =>
      cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      ),
    [cart]
  );

  return (
    <aside className="cart-drawer">
      <h2>{title}</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>${item.price}</p>
              </div>

              <div className="controls">
                <button onClick={() => updateQuantity(item.id, -1)}>
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => updateQuantity(item.id, 1)}>
                  +
                </button>
              </div>

              <button
                className="remove"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          ))}

          <div className="footer">
            <strong>Total: ${total}</strong>

            <button className="checkout">
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
}