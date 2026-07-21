# MotionCascade

A lightweight React component that progressively reveals grouped layout sections using existing EaseMotion CSS animation classes.

---

## Overview

`MotionCascade` coordinates cascading animations across direct child elements, allowing sections of a page to appear progressively rather than all at once. It is designed for layouts such as landing pages, dashboards, onboarding flows, documentation, and feature showcases while remaining lightweight, reusable, and CSS-first.

---

## Props

| Prop             | Type        | Default      | Description                                               |
| ---------------- | ----------- | ------------ | --------------------------------------------------------- |
| `children`       | `ReactNode` | —            | Direct child elements to animate in sequence.             |
| `animationClass` | `string`    | —            | CSS animation class applied to each child.                |
| `cascadeDelay`   | `number`    | `150`        | Delay (ms) between consecutive child animations.          |
| `direction`      | `string`    | `"vertical"` | Cascade direction (`"vertical"` or `"horizontal"`).       |
| `replay`         | `any`       | —            | Restarts the cascade whenever the value changes.          |
| `className`      | `string`    | `""`         | Additional class name for the wrapper element.            |
| `as`             | `string`    | `"div"`      | Wrapper element (`div`, `section`, `main`, etc.).         |
| `onCascadeStart` | `function`  | —            | Callback fired when the cascade begins.                   |
| `onCascadeEnd`   | `function`  | —            | Callback fired after the final child animation completes. |

---

## Example Usage

```jsx
import { useState } from "react";
import MotionCascade from "./MotionCascade";
import "./style.css";

export default function LandingPage() {
  const [replay, setReplay] = useState(0);

  return (
    <>
      <MotionCascade
        animationClass="fade-up"
        cascadeDelay={180}
        direction="vertical"
        replay={replay}
      >
        <section className="motion-cascade-section">Hero</section>
        <section className="motion-cascade-section">Features</section>
        <section className="motion-cascade-section">Pricing</section>
        <section className="motion-cascade-section">Testimonials</section>
      </MotionCascade>

      <button onClick={() => setReplay((value) => value + 1)}>
        Replay Cascade
      </button>
    </>
  );
}
```

Each direct child is revealed progressively while preserving its existing props, styles, and class names.

---

## Why MotionCascade?

- Creates progressive section-by-section layout animations.
- Ideal for landing pages, dashboards, onboarding flows, and documentation.
- Eliminates repetitive cascade timing logic.
- Supports configurable cascade direction and delay.
- Preserves existing child props and class names.
- Supports replayable animations and lifecycle callbacks.
- Works seamlessly with existing EaseMotion CSS animation classes.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
