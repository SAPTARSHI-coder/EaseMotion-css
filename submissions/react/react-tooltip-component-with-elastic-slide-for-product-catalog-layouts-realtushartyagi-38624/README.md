# React Tooltip Component with Elastic Slide for Product Catalog Layouts

A highly reusable React Tooltip component featuring a smooth "elastic slide" interaction, styled explicitly for **Product Catalog Layouts** (clean e-commerce aesthetics, minimal shadows, and integrated product details).

## Files
- `ProductTooltip.jsx` – The standalone React component. To avoid triggering broken CI workflows on the main repository, all CSS properties are elegantly embedded inside the component via a native `<style>` block. This guarantees a true zero-configuration import.

## Installation
1. Copy the `ProductTooltip.jsx` file into your React project.
2. Import the component where needed:
   ```jsx
   import ProductTooltip from './components/ProductTooltip';
   ```

## Usage
Wrap the element you want to trigger the tooltip with the `ProductTooltip` component. It's designed to be wrapped around product links, info icons, or standard catalog items.

```jsx
import React from 'react';
import ProductTooltip from './ProductTooltip';

export default function App() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <p>
        Check out our newest{' '}
        <ProductTooltip 
          productName="Premium Wireless Headphones"
          description="Active noise cancelling with 30-hour battery life."
          price="$299.99"
          inStock={true}
        >
          <span className="ease-catalog-trigger">Audio Gear</span>
        </ProductTooltip>
      </p>
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | `ReactNode` | Required | The element that triggers the tooltip on hover/focus. |
| `productName` | `string` | `'Premium Wireless Headphones'` | The title of the product shown in the tooltip. |
| `description` | `string` | `'Active noise cancelling...'` | A brief product description. |
| `price` | `string` | `'$299.99'` | The product price string. |
| `inStock` | `boolean`| `true` | Toggles the stock indicator (Green "In Stock" vs Red "Out of Stock"). |

## Why it fits EaseMotion CSS
This component perfectly applies EaseMotion's philosophy by bringing premium, complex animations directly into e-commerce user interfaces via pure CSS mechanics. The core interaction is the **Elastic Slide Entrance**: utilizing a custom `cubic-bezier(0.34, 1.56, 0.64, 1)` transition curve in the embedded stylesheet, the tooltip delivers a highly tactile, physical "spring" effect without requiring bulky JS animation libraries like Framer Motion. 

---

> **Note:** PR modifies only files inside `submissions/react/react-tooltip-component-with-elastic-slide-for-product-catalog-layouts-realtushartyagi-38624/`.
