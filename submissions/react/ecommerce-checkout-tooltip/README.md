# React Tooltip Component with Shimmer Pulse (E-Commerce)

A premium, animated tooltip component designed specifically for E-Commerce Checkout UI layouts. It utilizes a glowing shimmer pulse to highlight trust signals (SSL security, CVV info, VIP rewards) without cluttering the payment interface.

## Features
- 🌟 **Shimmer Pulse Effect**: Draws attention to vital checkout info securely and elegantly.
- 🎨 **Checkout-Specific Theming**: Supports `green` (Security/SSL), `gold` (Rewards/Savings), and `blue` (Shipping/Info).
- ⚡ **EaseMotion Integration**: Utilizes `ease-fade-in` and `ease-zoom-in` utility classes for flawless mount animations.
- 📐 **Flexible Positioning**: Supports `top`, `bottom`, `left`, and `right` placements.

## Props

| Prop       | Type      | Default  | Description                                                                 |
|------------|-----------|----------|-----------------------------------------------------------------------------|
| `children` | `node`    | Required | The trigger element that the tooltip wraps (e.g., a checkout button or icon).|
| `content`  | `node`    | Required | The text or elements to display inside the tooltip.                         |
| `position` | `string`  | `'top'`  | Where the tooltip appears relative to the target (`top`, `bottom`, etc.).   |
| `theme`    | `string`  | `'blue'` | The accent color of the border/shadow (`blue`, `green`, `gold`).            |

## Usage Example

```jsx
import React from 'react';
import CheckoutTooltip from './CheckoutTooltip';

const CheckoutPage = () => {
  return (
    <div className="checkout-container">
      <h2>Payment Details</h2>
      
      <div className="button-group">
        {/* Green Theme - Security Focus */}
        <CheckoutTooltip content="{<span">🔒 256-bit SSL Encrypted</span>} 
          position="top" 
          theme="green"
        >
          <button className="ease-hover-lift">Complete Order</button>
        </CheckoutTooltip>

        {/* Gold Theme - Rewards Focus */}
        <CheckoutTooltip content="{<span">✨ Earns 450 VIP Points</span>} 
          position="bottom" 
          theme="gold"
        >
          <span className="info-icon">Rewards Info</span>
        </CheckoutTooltip>
      </div>
    </div>
  );
};

export default CheckoutPage;