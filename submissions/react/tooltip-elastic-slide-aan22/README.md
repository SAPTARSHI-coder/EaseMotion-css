# Tooltip Elastic Slide

A minimal, accessible React tooltip component with a smooth elastic slide-in transition — designed for clean, minimal blog layouts.

## What does this do?
Shows a small tooltip bubble that elastically slides/fades in when the trigger element is hovered or focused.

## How is it used?

```jsx
import TooltipElasticSlide from "./TooltipElasticSlide";

function Example() {
  return (
    <TooltipElasticSlide text="This is a helpful tip!" position="top">
      <button>Hover me</button>
    </TooltipElasticSlide>
  );
}
```

## Props

| Prop       | Type      | Default | Description                                      |
|------------|-----------|---------|---------------------------------------------------|
| `text`     | `string`  | —       | The content shown inside the tooltip bubble       |
| `position` | `string`  | `"top"` | Tooltip placement: `top`, `bottom`, `left`, `right` |
| `children` | `node`    | —       | The trigger element the tooltip is attached to    |

## Why is it useful?
It's lightweight, keyboard-accessible (works on focus/blur, not just hover), and uses EaseMotion CSS utility classes (`ease-hover-lift`, `ease-fade-in`) to stay consistent with the framework's animation philosophy — perfect for minimal blog and portfolio layouts where a heavy tooltip library would be overkill.