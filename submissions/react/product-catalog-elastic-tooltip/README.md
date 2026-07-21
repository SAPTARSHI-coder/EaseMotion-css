# Product Catalog Elastic Tooltip (React)

A reusable React tooltip component with a smooth **Elastic Slide** animation, designed for product catalog layouts. It displays product details in an attractive tooltip using EaseMotion utility classes.

## Features

- Smooth Elastic Slide animation
- Responsive design
- Product information tooltip
- Keyboard accessible
- Reusable React component
- Supports multiple tooltip positions
- Uses EaseMotion utility classes

---

## Folder Structure

```
product-catalog-elastic-tooltip/
├── ProductCatalogTooltip.jsx
├── style.css
└── README.md
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| productName | string | "Wireless Headphones" | Product name |
| price | string | "$99.99" | Product price |
| description | string | "Premium sound quality..." | Product description |
| position | string | "top" | Tooltip position (`top`, `bottom`, `left`, `right`) |
| children | ReactNode | — | Trigger element |

---

## Usage

```jsx
import ProductCatalogTooltip from "./ProductCatalogTooltip";

function App() {
  return (
    <ProductCatalogTooltip
      productName="Smart Watch"
      price="$149.99"
      description="Track fitness, heart rate, and notifications."
      position="top"
    >
      <button>View Product</button>
    </ProductCatalogTooltip>
  );
}

export default App;
```

---

## Why EaseMotion CSS?

This component follows the EaseMotion CSS philosophy by providing lightweight, reusable, animation-first interactions with a clean React API and responsive behavior.

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

Created as a React component submission for the EaseMotion CSS repository.