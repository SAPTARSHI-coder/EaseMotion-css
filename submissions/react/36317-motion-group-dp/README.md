# MotionGroup

A lightweight React component that automatically applies staggered animation delays to grouped child elements using existing EaseMotion CSS animation classes.

---

## Overview

`MotionGroup` simplifies staggered animations by automatically assigning incremental `animation-delay` values to each child element. It works as a thin React wrapper around existing CSS animations, keeping the implementation lightweight, reusable, and CSS-first.

---

## Props

| Prop             | Type        | Default | Description                                     |
| ---------------- | ----------- | ------- | ----------------------------------------------- |
| `children`       | `ReactNode` | —       | Child elements to animate.                      |
| `animationClass` | `string`    | —       | CSS animation class applied to each child.      |
| `stagger`        | `number`    | `100`   | Delay (ms) added between consecutive children.  |
| `delay`          | `number`    | `0`     | Base delay before staggering begins.            |
| `className`      | `string`    | `""`    | Additional class name for the wrapper element.  |
| `as`             | `string`    | `"div"` | Wrapper element (`div`, `section`, `ul`, etc.). |

---

## Example Usage

```jsx
import MotionGroup from "./MotionGroup";
import "./style.css";

export default function CardGrid() {
  return (
    <MotionGroup
      animationClass="fade-up"
      stagger={120}
      as="ul"
      className="motion-group-list"
    >
      <li className="motion-group-card">Card One</li>
      <li className="motion-group-card">Card Two</li>
      <li className="motion-group-card">Card Three</li>
      <li className="motion-group-card">Card Four</li>
    </MotionGroup>
  );
}
```

Each child automatically receives an increasing animation delay while preserving its existing props, styles, and class names.

---

## Why MotionGroup?

- Automatically applies staggered animation timing.
- Reduces repetitive animation-delay calculations.
- Works with any existing EaseMotion CSS animation class.
- Preserves existing child props and class names.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
