# MotionTrigger

A lightweight React component that applies existing EaseMotion CSS animation classes in response to configurable user interactions.

---

## Overview

`MotionTrigger` simplifies interaction-driven animations by automatically applying a CSS animation class when a specified user event occurs. It supports common interaction types such as click, hover, focus, blur, and keyboard events while preserving existing props, styles, and event handlers. The component remains lightweight, reusable, and CSS-first.

---

## Props

| Prop               | Type           | Default   | Description                                                                       |
| ------------------ | -------------- | --------- | --------------------------------------------------------------------------------- |
| `children`         | `ReactElement` | —         | Child element that receives the animation.                                        |
| `trigger`          | `string`       | `"click"` | Event that triggers the animation (`click`, `hover`, `focus`, `blur`, `keydown`). |
| `animationClass`   | `string`       | —         | CSS animation class applied when triggered.                                       |
| `replay`           | `boolean`      | `false`   | Allows the animation to restart on repeated interactions.                         |
| `disabled`         | `boolean`      | `false`   | Disables animation triggering.                                                    |
| `className`        | `string`       | `""`      | Additional class name for the wrapper element.                                    |
| `as`               | `string`       | `"span"`  | Wrapper element (`span`, `div`, `button`, etc.).                                  |
| `onTrigger`        | `function`     | —         | Callback fired when the configured trigger occurs.                                |
| `onAnimationStart` | `function`     | —         | Callback fired when the animation begins.                                         |
| `onAnimationEnd`   | `function`     | —         | Callback fired when the animation completes.                                      |

For `trigger="keydown"`, the component responds to both **Enter** and **Space** to support standard keyboard interactions.

---

## Example Usage

```jsx
import MotionTrigger from "./MotionTrigger";
import "./style.css";

export default function App() {
  return (
    <MotionTrigger trigger="click" animationClass="bounce" replay>
      <button className="motion-trigger-button">Animate Me</button>
    </MotionTrigger>
  );
}
```

The child element retains its existing props, event handlers, and class names while receiving the configured animation class whenever the selected interaction occurs.

---

## Why MotionTrigger?

- Simplifies interaction-driven animations.
- Eliminates repetitive event handling logic.
- Supports click, hover, focus, blur, and keyboard interactions.
- Works seamlessly with existing EaseMotion CSS animation classes.
- Preserves existing child props, event handlers, and class names.
- Supports replayable animations and lifecycle callbacks.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
