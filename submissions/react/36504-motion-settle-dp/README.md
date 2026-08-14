# MotionSettle

## Overview

MotionSettle is a lightweight React component that coordinates rapid
changes to an element's animation class so that a new animation does
not interrupt one that is still running. When `animationClass`
changes while a previous animation is mid-flight, MotionSettle defers
applying the new class until the current animation finishes, avoiding
the visual glitching and abrupt cuts that happen when CSS animations
are swapped out mid-playback.

This solves a common problem in interactive UIs: state changes often
fire faster than an animation can complete (rapid clicks, quick prop
updates, fast re-renders), and naively swapping animation classes on
every change causes flicker or a stuck-looking transition.

MotionSettle does not generate or define any animation itself — it
only coordinates _when_ an existing EaseMotion CSS animation class is
applied to its child, keeping the implementation fully CSS-first.

## Props

| Prop                | Type       | Default | Description                                                                |
| ------------------- | ---------- | ------- | -------------------------------------------------------------------------- |
| `children`          | `element`  | —       | A single valid React element that receives the animation class.            |
| `animationClass`    | `string`   | —       | The CSS animation class to apply.                                          |
| `waitForCompletion` | `bool`     | `true`  | If `true`, defers a new animation class until the current one finishes.    |
| `immediate`         | `bool`     | `false` | If `true`, bypasses waiting and applies the new class immediately.         |
| `className`         | `string`   | `""`    | Additional class name(s) applied to the wrapper element.                   |
| `as`                | `string`   | `"div"` | Element type used for the wrapper.                                         |
| `onAnimationStart`  | `function` | —       | Called with the applied animation class whenever an animation starts.      |
| `onAnimationEnd`    | `function` | —       | Called with the animation class and event when the child's animation ends. |

## Example Usage

```jsx
import { useState } from "react";
import MotionSettle from "./component";
import "./style.css";

export default function App() {
  const [animationClass, setAnimationClass] = useState("fade-up");

  return (
    <div className="motion-settle-page">
      <div className="motion-settle-demo">
        <MotionSettle animationClass={animationClass} waitForCompletion>
          <div className="motion-settle-card">
            <h3 className="motion-settle-card__title">Settled Motion</h3>
            <p className="motion-settle-card__description">
              Rapid triggers won't interrupt this animation mid-flight.
            </p>
          </div>
        </MotionSettle>

        <div className="motion-settle-controls">
          <button
            className="motion-settle-button"
            onClick={() => setAnimationClass("fade-up")}
          >
            Fade Up
          </button>
          <button
            className="motion-settle-button"
            onClick={() => setAnimationClass("fade-down")}
          >
            Fade Down
          </button>
        </div>
      </div>
    </div>
  );
}
```

## Why MotionSettle?

Interrupting a CSS animation mid-playback to start a different one
almost always looks broken — the element jumps, flickers, or appears
to freeze because the browser abandons one keyframe sequence for
another before it has resolved. This is especially common when state
changes rapidly, such as repeated clicks or fast-updating props, and
most components have no defense against it.

MotionSettle centralizes that coordination in one place: it tracks
whether an animation is currently running and either queues the next
animation class until completion or applies it immediately, depending
on the `immediate` and `waitForCompletion` props. Because this logic
is generic — it only tracks a class name and an `animationend` event —
the component is fully reusable across any child element and any pair
of CSS animation classes.

MotionSettle fits EaseMotion CSS's philosophy directly: it never
defines, generates, or inspects animation keyframes. It only decides
_when_ an existing CSS animation class is swapped in, leaving all
actual motion authored in CSS, keeping the whole system CSS-first and
free of any animation engine.
