# React Liquid Ripple Modal – SaaS Pricing

A reusable React modal component featuring a Liquid Ripple animation designed for SaaS pricing pages and premium subscription interfaces. Built with EaseMotion CSS utility classes, responsive layouts and accessible dialog semantics.

---

## Features

- React functional component
- Liquid Ripple animation
- SaaS pricing inspired design
- Responsive layout
- Accessible dialog semantics
- EaseMotion CSS utility classes
- Customizable props
- Optional external stylesheet
- Lightweight and reusable

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | `true` | Controls modal visibility |
| `title` | string | `"Premium Plan"` | Modal heading |
| `description` | string | `"Unlock advanced analytics, unlimited projects and priority support."` | Modal description |
| `onClose` | function | `() => {}` | Callback when closing the modal |

---

## Usage

```jsx
import LiquidRippleModal from "./LiquidRippleModal";

function App() {
  return (
    <LiquidRippleModal
      isOpen={true}
      title="Business Plan"
      description="Scale your SaaS with premium features."
      onClose={() => console.log("Closed")}
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

along with a custom Liquid Ripple animation.

---

## Accessibility

- Uses `role="dialog"`
- Includes `aria-modal="true"`
- Close button has an accessible label
- Keyboard friendly structure

---

## Responsive

The modal automatically adapts spacing and typography for smaller screens while maintaining readability.

---

## Folder Structure

```
react-modal-liquid-ripple-saas/
│
├── LiquidRippleModal.jsx
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
