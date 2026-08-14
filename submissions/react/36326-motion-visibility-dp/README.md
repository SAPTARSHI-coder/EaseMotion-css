# MotionVisibility

A lightweight React component that automatically applies existing EaseMotion CSS animation classes when elements enter the viewport using the native Intersection Observer API.

---

## Overview

`MotionVisibility` simplifies viewport-triggered animations by automatically adding an animation class when an element becomes visible. It relies entirely on existing EaseMotion CSS animation classes, making it a lightweight, reusable, and CSS-first solution without external dependencies.

---

## Props

| Prop             | Type        | Default | Description                                                             |
| ---------------- | ----------- | ------- | ----------------------------------------------------------------------- |
| `children`       | `ReactNode` | —       | Content to observe and animate.                                         |
| `animationClass` | `string`    | —       | CSS animation class applied when visible.                               |
| `threshold`      | `number`    | `0.2`   | Visibility threshold required to trigger the animation.                 |
| `rootMargin`     | `string`    | `"0px"` | Margin passed to the Intersection Observer.                             |
| `once`           | `boolean`   | `false` | Triggers the animation only the first time the element becomes visible. |
| `onEnter`        | `function`  | —       | Callback executed when the element enters the viewport.                 |
| `onLeave`        | `function`  | —       | Callback executed when the element leaves the viewport.                 |
| `className`      | `string`    | `""`    | Additional class names for the wrapper element.                         |
| `as`             | `string`    | `"div"` | Wrapper element (`div`, `section`, `article`, etc.).                    |

---

## Example Usage

```jsx
import MotionVisibility from "./MotionVisibility";
import "./style.css";

export default function FeatureSection() {
  return (
    <MotionVisibility
      as="section"
      animationClass="fade-up"
      threshold={0.25}
      rootMargin="0px 0px -50px 0px"
      once
    >
      <div className="motion-visibility-card">
        <h2>Features</h2>
        <p>This section animates when it enters the viewport.</p>
      </div>
    </MotionVisibility>
  );
}
```

---

## Why MotionVisibility?

- Automatically triggers animations when elements enter the viewport.
- Uses the native **Intersection Observer API** for efficient visibility detection.
- Supports one-time and repeatable animations.
- Works with any existing EaseMotion CSS animation class.
- Eliminates repetitive viewport observation logic.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's **CSS-first** philosophy.
