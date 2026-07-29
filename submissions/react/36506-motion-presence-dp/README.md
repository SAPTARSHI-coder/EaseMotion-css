# MotionPresence

## Overview

MotionPresence is a lightweight React component that provides
declarative enter and exit animations for conditionally rendered
content. Instead of unmounting an element the instant its `present`
prop becomes `false`, MotionPresence keeps the element mounted, applies
an exit animation class, and only removes it from the DOM once that
animation has actually finished playing.

This solves a common problem with conditional rendering in React:
toggling a component off with `{present && <Child />}` removes it
immediately, so any exit animation defined in CSS never gets a chance
to play. Handling this correctly normally requires tracking mount
state, animation completion, and cleanup by hand for every component
that needs an exit transition.

MotionPresence coordinates existing EaseMotion CSS animation classes
only — it does not define, generate, or inspect any animation itself.
It listens for the child's `animationend` event to know when the exit
animation has completed, keeping the entire approach CSS-first.

## Props

| Prop             | Type       | Default | Description                                                                |
| ---------------- | ---------- | ------- | -------------------------------------------------------------------------- |
| `children`       | `element`  | —       | A single valid React element to show and hide.                             |
| `present`        | `bool`     | —       | Whether the child should be mounted and visible.                           |
| `enterClass`     | `string`   | —       | CSS animation class applied when `present` becomes `true`.                 |
| `exitClass`      | `string`   | —       | CSS animation class applied when `present` becomes `false`.                |
| `className`      | `string`   | `""`    | Additional class name(s) applied to the wrapper element.                   |
| `as`             | `string`   | `"div"` | Element type used for the wrapper.                                         |
| `onEnterStart`   | `function` | —       | Called when the enter animation class is applied.                          |
| `onExitComplete` | `function` | —       | Called with the event once the exit animation finishes and unmount occurs. |

## Example Usage

```jsx
import { useState } from "react";
import MotionPresence from "./component";
import "./style.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="motion-presence-page">
      <div className="motion-presence-demo">
        <button
          className="motion-presence-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "Hide" : "Show"} Card
        </button>

        <MotionPresence
          present={isOpen}
          enterClass="fade-up"
          exitClass="fade-down"
        >
          <div className="motion-presence-card">
            <h3 className="motion-presence-card__title">Motion Presence</h3>
            <p className="motion-presence-card__description">
              This card animates in and stays mounted long enough to animate
              out.
            </p>
          </div>
        </MotionPresence>
      </div>
    </div>
  );
}
```

## Why MotionPresence?

Exit animations usually require boilerplate that has nothing to do
with the animation itself: tracking whether a component is "really"
gone versus just animating out, delaying the actual unmount, and
cleaning up listeners or timers so the delay doesn't leak or fire
incorrectly. Most conditional rendering patterns skip this entirely,
which is why exit transitions are so often missing from React
components even when entrance transitions exist.

MotionPresence centralizes that coordination in one place: it mounts
on `present === true`, applies `enterClass`, and on `present === false`
keeps rendering with `exitClass` applied until the browser's
`animationend` event fires, only then removing the element. Because
it only tracks a boolean and two class names, it's fully reusable
across any child element and any pair of CSS animations.

It fits EaseMotion CSS's philosophy directly: no animation timing,
easing, or keyframes are defined in JavaScript. MotionPresence only
decides _when_ existing CSS animation classes are applied and when
unmounting is safe to perform, keeping the whole system CSS-first.
