# Medical Tooltip (React)

A reusable React tooltip component featuring a **Shimmer Pulse** interaction for medical dashboard interfaces.

## Features

- React component
- Uses EaseMotion utility classes
- CSS-only shimmer animation
- Keyboard accessible
- Responsive
- No JavaScript animation libraries

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| label | string | Patient Status | Button text |
| tooltip | string | Patient vitals are stable. | Tooltip content |
| variant | string | primary | Button variant |
| position | string | top | top, bottom, left, right |

---

## Usage

```jsx
import MedicalTooltip from "./MedicalTooltip";

function App() {
  return (
    <MedicalTooltip
      label="Heart Rate"
      tooltip="Heart rate is within the normal range."
      variant="primary"
      position="top"
    />
  );
}
```

---

## EaseMotion Classes Used

```text
ease-fade-in
ease-hover-lift
```

---

## Styling

The shimmer effect is implemented entirely with CSS using a pseudo-element and keyframe animation.

No JavaScript animation libraries are required.

---

## Accessibility

- Keyboard accessible
- Semantic tooltip role
- Responsive
- Lightweight

---

## Folder

```
submissions/react/shimmer-pulse-tooltip/
├── MedicalTooltip.jsx
├── tooltip.css
└── README.md
```

---

## Browser Support

- Chrome
- Firefox
- Edge
- Safari