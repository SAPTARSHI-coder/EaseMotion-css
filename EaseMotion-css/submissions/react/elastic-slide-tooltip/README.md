# Elastic Slide Tooltip (React)

A reusable React tooltip component with a smooth elastic slide animation.

## Features

- Smooth slide animation
- Lightweight and reusable
- Custom tooltip text
- Multiple positions
- Easy to integrate

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | "Tooltip" | Tooltip content |
| position | string | "top" | top, bottom, left, right |
| children | ReactNode | Required | Element to wrap |

## Usage

```jsx
import Tooltip from "./Tooltip";
import "./style.css";

export default function App() {
  return (
    <Tooltip text="Hello!" position="top">
      <button>Hover Me</button>
    </Tooltip>
  );
}
```

## Folder Structure

```
Tooltip/
├── Tooltip.jsx
├── style.css
└── README.md
```

## Customization

- Change tooltip colors in `style.css`.
- Adjust animation duration using the `transition` property.
- Modify spacing by changing the `bottom` value.

## License

Open source for educational purposes.