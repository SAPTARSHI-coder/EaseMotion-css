# MotionDeferred

## Overview

MotionDeferred is a lightweight React component that delays applying
an existing EaseMotion CSS animation class until a configurable amount
of time has passed after the component first renders. The child
content itself renders immediately and is fully visible right away —
only the animation class is withheld and applied later, once the
delay has elapsed.

The problem it solves is competing priorities at initial render: when
several animated elements all start animating the moment a page loads,
they compete with critical rendering work like layout, paint, and
data fetching, and the result often looks like visual noise rather
than a deliberate sequence. Non-critical, decorative animations
frequently don't need to start immediately, but most components have
no built-in way to postpone them without manual `setTimeout` wiring
scattered throughout the codebase.

MotionDeferred coordinates existing EaseMotion CSS animation classes
only — it applies whatever `animationClass` is provided after the
delay, without generating, inspecting, or modifying any keyframes
itself. This keeps the approach fully CSS-first: the animation's
appearance and timing remain owned entirely by CSS, while the
component only decides when that class is switched on.

## Props

| Prop              | Type       | Default | Description                                                              |
| ----------------- | ---------- | ------- | ------------------------------------------------------------------------ |
| `children`        | `element`  | —       | A single valid React element that receives the deferred animation class. |
| `animationClass`  | `string`   | —       | CSS animation class applied once the delay elapses.                      |
| `delay`           | `number`   | `300`   | Milliseconds to wait after mount before applying the animation class.    |
| `disabled`        | `bool`     | `false` | If `true`, applies the animation class immediately, skipping the delay.  |
| `className`       | `string`   | `""`    | Additional class name(s) applied to the wrapper element.                 |
| `as`              | `string`   | `"div"` | Element type used for the wrapper.                                       |
| `onDeferredStart` | `function` | —       | Called once the deferred animation class is applied.                     |

## Example Usage

```jsx
import { useState } from "react";
import MotionDeferred from "./component";
import "./style.css";

export default function App() {
  const [status, setStatus] = useState("waiting");

  return (
    <div className="motion-deferred-page">
      <div className="motion-deferred-demo">
        <span className="motion-deferred-badge">
          {status === "waiting" ? "Deferred: waiting" : "Deferred: started"}
        </span>

        <div className="motion-deferred-info-card">
          <h3 className="motion-deferred-info-card__title">Motion Deferred</h3>
          <p className="motion-deferred-info-card__description">
            This card below renders immediately, but its animation is delayed by
            800ms.
          </p>
        </div>

        <div className="motion-deferred-grid">
          <MotionDeferred
            animationClass="fade-up"
            delay={800}
            disabled={false}
            onDeferredStart={() => setStatus("started")}
          >
            <div className="motion-deferred-card">
              <h3 className="motion-deferred-card__title">Secondary Content</h3>
              <p className="motion-deferred-card__description">
                Animates in after the deferred delay.
              </p>
            </div>
          </MotionDeferred>
        </div>
      </div>
    </div>
  );
}
```

## Why MotionDeferred?

Not every animation on a page needs to start the instant it renders.
Secondary or decorative content — a supplementary card, a promotional
banner, a non-essential widget — often benefits more from appearing a
beat after the primary content has settled, so the user's attention
is drawn to what matters first instead of everything animating in at
once. Delaying that motion deliberately, rather than letting it fire
immediately by default, is a small but meaningful improvement to
perceived hierarchy and polish.

Without a reusable mechanism, achieving this means writing a
`setTimeout` and a piece of local state in every component that needs
a deferred animation, then remembering to clear that timer on unmount
to avoid updating state after the component is gone. That logic is
identical everywhere it's needed, which makes it a good candidate for
centralization rather than repetition.

MotionDeferred centralizes exactly that: one small component tracks
the delay, applies the animation class when it elapses, exposes an
`onDeferredStart` callback for coordinating other logic, and cleans up
its timer automatically on unmount or when props change. Any element
that needs delayed motion can be wrapped once instead of re-implementing
the same timer logic by hand.

MotionDeferred fits EaseMotion CSS's philosophy directly: it defines no
animation, generates no CSS, and inspects no stylesheets. It only
decides _when_ an existing CSS animation class is switched on, leaving
all actual motion to CSS and keeping the whole system CSS-first.
