# React Elastic Slide Tooltip

A reusable React Tooltip component featuring a smooth elastic slide animation for creative portfolio layouts.

## Features

- Elastic slide animation
- React functional component
- Customizable tooltip text
- Multiple positions (top, bottom, left, right)
- Uses EaseMotion utility classes
- Easy to integrate

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | "Creative Portfolio" | Button text |
| tooltip | string | "View Project" | Tooltip content |
| position | string | "top" | Tooltip position (`top`, `bottom`, `left`, `right`) |

## Usage

```jsx
import ElasticSlideTooltip from "./ElasticSlideTooltip";

function App() {
  return (
    <ElasticSlideTooltip
      text="My Portfolio"
      tooltip="Explore Projects"
      position="top"
    />
  );
}
```

## Folder Structure

```
elastic-slide-tooltip/
│── ElasticSlideTooltip.jsx
│── style.css
└── README.md
```

## License

This component is created for the EaseMotion CSS repository and follows its contribution guidelines.