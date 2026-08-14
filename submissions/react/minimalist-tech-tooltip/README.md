# Minimalist Tech Tooltip

A reusable React tooltip component with a clean minimalist design and smooth elastic slide animation. It is lightweight, customizable, and integrates seamlessly with EaseMotion utility classes.

## Features

- Minimalist tech-inspired UI
- Smooth elastic slide animation
- Keyboard accessible (hover & focus)
- Configurable tooltip position
- Adjustable display delay
- Reusable React component
- Uses EaseMotion utility classes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | `"Hover Me"` | Text displayed on the trigger button |
| `message` | string | `"Minimalist Tech Tooltip"` | Tooltip content |
| `position` | string | `"top"` | Tooltip position (`top`, `bottom`, `left`, `right`) |
| `delay` | number | `150` | Delay (ms) before showing the tooltip |

## Usage

```jsx
import MinimalistTechTooltip from "./MinimalistTechTooltip";

function App() {
  return (
    <MinimalistTechTooltip
      label="Documentation"
      message="Read the complete guide"
      position="right"
      delay={200}
    />
  );
}

export default App;
```

## Folder Structure

```
minimalist-tech-tooltip/
├── MinimalistTechTooltip.jsx
├── style.css
└── README.md
```

## Customization

- Change the tooltip position using the `position` prop.
- Modify the display delay with the `delay` prop.
- Update colors, borders, and typography in `style.css` to match your project theme.

## License

Created for the EaseMotion CSS repository following its React contribution guidelines.