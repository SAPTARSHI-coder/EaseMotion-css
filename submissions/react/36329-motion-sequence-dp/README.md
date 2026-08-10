# MotionSequence

A lightweight React component that orchestrates sequential animations for grouped child elements using existing EaseMotion CSS animation classes.

---

## Overview

`MotionSequence` reveals child elements one at a time by applying an existing CSS animation class in sequence. Unlike staggered animations, each child is activated according to the configured sequence timing, making it ideal for onboarding flows, feature highlights, multi-step interfaces, and guided content.

---

## Props

| Prop             | Type        | Default | Description                                     |
| ---------------- | ----------- | ------- | ----------------------------------------------- |
| `children`       | `ReactNode` | —       | Child elements to animate sequentially.         |
| `animationClass` | `string`    | —       | CSS animation class applied to each child.      |
| `interval`       | `number`    | `200`   | Time (ms) between consecutive animations.       |
| `autoPlay`       | `boolean`   | `true`  | Starts the sequence automatically.              |
| `replayKey`      | `any`       | —       | Restarts the sequence when the value changes.   |
| `className`      | `string`    | `""`    | Additional class name for the wrapper element.  |
| `as`             | `string`    | `"div"` | Wrapper element (`div`, `section`, `ul`, etc.). |

---

## Example Usage

```jsx
import { useState } from "react";
import MotionSequence from "./MotionSequence";
import "./style.css";

export default function Onboarding() {
  const [replayKey, setReplayKey] = useState(0);

  return (
    <>
      <MotionSequence
        animationClass="fade-up"
        interval={250}
        replayKey={replayKey}
      >
        <div className="motion-sequence-card">Step 1</div>
        <div className="motion-sequence-card">Step 2</div>
        <div className="motion-sequence-card">Step 3</div>
      </MotionSequence>

      <button onClick={() => setReplayKey((key) => key + 1)}>Replay</button>
    </>
  );
}
```

Each child is revealed in sequence while preserving its existing props, styles, and class names.

---

## Why MotionSequence?

- Coordinates sequential animations with minimal React code.
- Eliminates repetitive timer and sequencing logic.
- Works with existing EaseMotion CSS animation classes.
- Preserves child props and class names.
- Supports replayable animation sequences.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
