# React Shimmer Pulse Tooltip – Crypto

A reusable React tooltip component featuring a shimmer pulse animation designed for crypto dashboards, trading interfaces and financial applications. Built with EaseMotion CSS utility classes, responsive layouts and accessible tooltip semantics.

---

## Features

- React functional component
- Shimmer Pulse animation
- Crypto-inspired UI
- Responsive layout
- Accessible tooltip semantics
- EaseMotion CSS utility classes
- Customizable props
- Optional external stylesheet
- Lightweight and reusable

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | `"BTC"` | Trigger button label |
| `text` | string | `"Bitcoin is trading above resistance."` | Tooltip content |
| `position` | string | `"top"` | Tooltip position (`top`, `bottom`, `left`, `right`) |

---

## Usage

```jsx
import ShimmerPulseTooltip from "./ShimmerPulseTooltip";

function App() {
  return (
    <ShimmerPulseTooltip
      label="ETH"
      text="Ethereum network activity is increasing."
      position="top"
    />
  );
}
```

---

## Styling

Import the stylesheet:

```jsx
import "./style.css";
```

The component uses EaseMotion CSS utility classes including:

- `ease-fade-in`
- `ease-hover-lift`

along with a custom shimmer pulse animation.

---

## Accessibility

- Uses `role="tooltip"`
- Links trigger and tooltip with `aria-describedby`
- Keyboard accessible using `:focus-within`
- Hover and keyboard interaction supported

---

## Responsive

The tooltip automatically adapts spacing and sizing for smaller screens while preserving readability.

---

## Folder Structure

```
react-tooltip-shimmer-pulse-crypto/
│
├── ShimmerPulseTooltip.jsx
├── style.css
└── README.md
```

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

---

## License

Designed for the EaseMotion CSS React examples collection.
