# React Tooltip Component with Elastic Slide for Command Palette Layouts

A reusable React tooltip component featuring a smooth elastic slide animation. The component is lightweight, responsive, keyboard accessible, and designed for command palette interfaces.

## Features

- ⚛️ React functional component
- ✨ Elastic slide tooltip animation
- 🎯 Responsive layout
- ♿ Keyboard accessible
- 🎨 Easily customizable
- 📦 Lightweight and reusable

## Folder Structure

```
submissions/
└── react/
    └── react-tooltip-elastic-slide-command-palette/
        ├── ElasticSlideTooltip.jsx
        ├── style.css
        └── README.md
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `"Tooltip"` | Tooltip content |
| `position` | string | `"top"` | Tooltip position (`top`, `bottom`, `left`, `right`) |
| `children` | ReactNode | — | Element that triggers the tooltip |

## Usage

```jsx
import ElasticSlideTooltip from "./ElasticSlideTooltip";
import "./style.css";

function App() {
  return (
    <ElasticSlideTooltip text="Open Command Palette">
      <button>Ctrl + K</button>
    </ElasticSlideTooltip>
  );
}

export default App;
```

## Customization

The component can be customized by modifying the CSS file:

- Animation duration
- Easing function
- Colors
- Border radius
- Padding
- Tooltip position
- Shadow effects

## Accessibility

- Keyboard focus support
- Mouse hover support
- Responsive design
- Semantic React component structure

## Browser Support

- Chrome
- Firefox
- Edge
- Safari

## License

This example is intended as a contribution for the EaseMotion CSS repository.