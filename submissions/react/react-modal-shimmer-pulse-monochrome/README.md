# React Modal Component with Shimmer Pulse

A reusable React modal component featuring a subtle shimmer pulse animation inspired by Monochrome Neo interfaces. Built using EaseMotion CSS utility classes with responsive behavior and accessibility in mind.

---

## Features

- React functional component
- Shimmer pulse animation
- Monochrome Neo design
- Responsive layout
- Accessible dialog semantics
- EaseMotion CSS utility classes
- Customizable via props
- Optional external stylesheet
- Lightweight and reusable

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `isOpen` | boolean | `true` | Controls modal visibility |
| `title` | string | `"Monochrome Neo Modal"` | Modal heading |
| `description` | string | Default description | Modal content |
| `onClose` | function | `() => {}` | Triggered when close button is clicked |

---

## Usage

```jsx
import ShimmerPulseModal from "./ShimmerPulseModal";

function App() {
  return (
    <ShimmerPulseModal
      isOpen={true}
      title="Welcome"
      description="This modal demonstrates a shimmer pulse animation."
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

along with a custom shimmer pulse animation.

---

## Accessibility

- Uses `role="dialog"`
- Includes `aria-modal="true"`
- Labels dialog with `aria-labelledby`
- Associates description using `aria-describedby`
- Close button includes an accessible label
- Keyboard-friendly button controls

---

## Responsive

The layout automatically adapts for mobile devices by stacking action buttons and reducing spacing on smaller screens.

---

## Folder Structure

```
react-modal-shimmer-pulse-monochrome/
│
├── ShimmerPulseModal.jsx
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
