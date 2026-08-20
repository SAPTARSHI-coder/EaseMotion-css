# React Neumorphic Elastic Tooltip

A reusable React tooltip component featuring a smooth elastic slide animation with a soft neumorphic design. Built for modern React applications using EaseMotion utility classes.

## Features

- Neumorphic soft UI
- Elastic slide animation
- React functional component
- Customizable tooltip text
- Multiple positions
- Lightweight and reusable

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | "Hover Me" | Button label |
| tooltip | string | "Neumorphic Tooltip" | Tooltip content |
| position | string | "top" | Tooltip position (`top`, `bottom`, `left`, `right`) |

## Usage

```jsx
import NeumorphicElasticTooltip from "./NeumorphicElasticTooltip";

export default function App() {
  return (
    <NeumorphicElasticTooltip
      text="Portfolio"
      tooltip="Open Project"
      position="top"
    />
  );
}
```

## Folder Structure

```
neumorphic-elastic-tooltip/
├── NeumorphicElasticTooltip.jsx
├── style.css
└── README.md
```

## License

Created for the EaseMotion CSS repository under its contribution guidelines.
```