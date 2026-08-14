# Accessible Elastic Slide Tooltip (React)

A reusable React Tooltip component featuring a smooth **Elastic Slide** animation for accessible web interfaces. It supports keyboard navigation, screen readers, responsive layouts, and customizable tooltip positions using EaseMotion utility classes.

## Features

- 🎯 Smooth Elastic Slide animation
- ♿ Accessibility-friendly (`role="tooltip"`, `aria-describedby`, keyboard focus support)
- 📱 Responsive design
- ⚛️ Reusable React component
- 🎨 Customizable tooltip positions (Top, Bottom, Left, Right)
- 🚀 Easy integration into React projects

---

## Folder Structure

```
accessible-elastic-tooltip/
├── AccessibleElasticTooltip.jsx
├── style.css
└── README.md
```

---

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `"Tooltip"` | Tooltip content |
| `position` | string | `"top"` | Position: `top`, `bottom`, `left`, `right` |
| `children` | ReactNode | — | Element that triggers the tooltip |

---

## Usage

```jsx
import AccessibleElasticTooltip from "./AccessibleElasticTooltip";

function App() {
  return (
    <AccessibleElasticTooltip
      text="Accessible Tooltip"
      position="top"
    >
      <button>Hover or Focus Me</button>
    </AccessibleElasticTooltip>
  );
}

export default App;
```

---

## Accessibility Features

- Supports keyboard navigation using `Tab`
- Uses `role="tooltip"` for screen readers
- Uses `aria-describedby` to associate the tooltip with its trigger
- Uses `aria-hidden` to indicate visibility state
- Displays on both mouse hover and keyboard focus

---

## Styling

The component includes:

- Elastic Slide animation
- Smooth fade transition
- Responsive tooltip sizing
- EaseMotion utility classes
- Focus-visible outline for accessibility

---

## Browser Support

- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari (modern versions)

---

## License

This component is provided as a React submission for the **EaseMotion CSS** repository and can be customized to fit your project requirements.