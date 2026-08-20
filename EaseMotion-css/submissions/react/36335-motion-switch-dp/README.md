# MotionSwitch

A lightweight React component that applies existing EaseMotion CSS animation classes whenever the active UI state changes.

---

## Overview

`MotionSwitch` simplifies transitions between conditionally rendered content by automatically applying an animation class whenever the `activeKey` changes. It works as a lightweight React wrapper around existing EaseMotion CSS animations, making state transitions smoother while remaining reusable, dependency-free, and CSS-first.

---

## Props

| Prop                | Type        | Default   | Description                                                                     |
| ------------------- | ----------- | --------- | ------------------------------------------------------------------------------- |
| `children`          | `ReactNode` | —         | The currently active content to render.                                         |
| `activeKey`         | `any`       | —         | Unique value representing the active state. Changing it triggers the animation. |
| `animationClass`    | `string`    | —         | CSS animation class applied during state transitions.                           |
| `duration`          | `string`    | `"400ms"` | Duration for which the animation class remains active.                          |
| `className`         | `string`    | `""`      | Additional class name for the wrapper element.                                  |
| `as`                | `string`    | `"div"`   | Wrapper element (`div`, `section`, `main`, etc.).                               |
| `onTransitionStart` | `function`  | —         | Callback fired when a transition begins.                                        |
| `onTransitionEnd`   | `function`  | —         | Callback fired when a transition completes.                                     |

---

## Example Usage

```jsx
import { useState } from "react";
import MotionSwitch from "./MotionSwitch";
import "./style.css";

export default function App() {
  const [currentView, setCurrentView] = useState("home");

  return (
    <>
      <MotionSwitch
        activeKey={currentView}
        animationClass="fade-up"
        duration="500ms"
      >
        {currentView === "home" && (
          <div className="motion-switch-card">Home</div>
        )}

        {currentView === "about" && (
          <div className="motion-switch-card">About</div>
        )}

        {currentView === "contact" && (
          <div className="motion-switch-card">Contact</div>
        )}
      </MotionSwitch>

      <button onClick={() => setCurrentView("about")}>Switch View</button>
    </>
  );
}
```

Whenever `activeKey` changes, the specified animation class is applied automatically while preserving the existing props, styles, and class names of the rendered content.

---

## Why MotionSwitch?

- Automatically animates transitions between UI states.
- Eliminates repetitive class-toggle logic.
- Works with existing EaseMotion CSS animation classes.
- Preserves existing child props and class names.
- Supports transition lifecycle callbacks.
- Lightweight, reusable, and dependency-free.
- Follows EaseMotion CSS's CSS-first philosophy.
