# Elastic Slide Tooltip (React)

A responsive React Tooltip component featuring a smooth Elastic Slide animation using EaseMotion utility classes.

## Features

- Elastic slide animation
- Responsive dashboard friendly
- React functional component
- Reusable and customizable
- Multiple positions
- EaseMotion utility classes

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| text | string | Tooltip | Tooltip content |
| position | string | top | top, bottom, left, right |
| children | ReactNode | — | Target element |

## Usage

```jsx
import ElasticSlideTooltip from "./ElasticSlideTooltip";

function App() {
  return (
    <ElasticSlideTooltip
      text="Dashboard Settings"
      position="top"
    >
      <button>Hover Me</button>
    </ElasticSlideTooltip>
  );
}

export default App;
```

## Files

```
ElasticSlideTooltip.jsx
style.css
README.md
```

## Animation

- Elastic Slide
- Smooth fade
- Responsive
- EaseMotion compatible