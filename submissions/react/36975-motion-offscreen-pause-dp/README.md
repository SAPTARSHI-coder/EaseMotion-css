# MotionOffscreenPause

## Overview

MotionOffscreenPause is a lightweight React component that pauses an
element's running CSS animation whenever the browser tab becomes
hidden, and automatically resumes it once the tab becomes visible
again. It listens to the native `visibilitychange` event on
`document` and toggles `animation-play-state` on its child accordingly,
requiring no polling, timers, or manual visibility checks in the
consuming component.

The problem it solves is wasted work: continuous CSS animations —
loaders, floating decorations, pulsing indicators — keep running at
full frame rate even when a tab is in the background and completely
invisible to the user, consuming CPU and battery for no visible
benefit. Most components never account for this because tracking
`document.hidden` and wiring up the corresponding pause/resume logic
is easy to forget and repetitive to implement per component.

MotionOffscreenPause coordinates this behavior around existing
EaseMotion CSS animation classes only — it applies whatever
`animationClass` is passed in and controls playback state, without
defining, generating, or inspecting any keyframes itself. This keeps
the entire approach CSS-first: the animation's appearance and timing
remain fully owned by CSS, while the component only decides when that
animation should play or pause.

## Props

| Prop             | Type       | Default | Description                                                           |
| ---------------- | ---------- | ------- | --------------------------------------------------------------------- |
| `children`       | `element`  | —       | A single valid React element that receives the animation class.       |
| `animationClass` | `string`   | —       | CSS animation class applied to the child.                             |
| `disabled`       | `bool`     | `false` | If `true`, ignores visibility changes and never pauses the animation. |
| `className`      | `string`   | `""`    | Additional class name(s) applied to the wrapper element.              |
| `as`             | `string`   | `"div"` | Element type used for the wrapper.                                    |
| `onPause`        | `function` | —       | Called when the tab becomes hidden and the animation is paused.       |
| `onResume`       | `function` | —       | Called when the tab becomes visible and the animation resumes.        |

## Example Usage

```jsx
import { useState } from "react";
import MotionOffscreenPause from "./component";
import "./style.css";

export default function App() {
  const [status, setStatus] = useState("running");

  return (
    <div className="motion-offscreen-pause-page">
      <div className="motion-offscreen-pause-demo">
        <span
          className={`motion-offscreen-pause-status ${
            status === "paused" ? "motion-offscreen-pause-status--paused" : ""
          }`}
        >
          <span className="motion-offscreen-pause-status__dot" />
          {status === "paused" ? "Paused (tab hidden)" : "Running"}
        </span>

        <MotionOffscreenPause
          animationClass="float"
          disabled={false}
          onPause={() => setStatus("paused")}
          onResume={() => setStatus("running")}
        >
          <div className="motion-offscreen-pause-loader" />
        </MotionOffscreenPause>

        <div className="motion-offscreen-pause-card fade-up">
          <h3 className="motion-offscreen-pause-card__title">
            Offscreen Pause
          </h3>
          <p className="motion-offscreen-pause-card__description">
            Switch to another tab and back to see the loader pause and resume.
          </p>
        </div>
      </div>
    </div>
  );
}
```

## Why MotionOffscreenPause?

Continuous CSS animations don't know anything about tab visibility by
default — a spinner, a floating decoration, or a pulsing badge keeps
running at full speed in a background tab, consuming CPU cycles and
battery for an animation nobody is watching. Browsers already expose
the information needed to fix this through the Page Visibility API,
but very few components actually use it, because wiring up the
`visibilitychange` listener, tracking state, and cleaning up on
unmount is boilerplate that's easy to skip under deadline pressure.

Centralizing that logic into MotionOffscreenPause removes the need to
repeat it per component. Any element with a continuous animation can
be wrapped once, and pause/resume behavior is handled consistently
everywhere it's used, including proper listener cleanup on unmount so
there's no risk of leaks across route changes or re-renders.

The performance benefit compounds across a page with multiple animated
elements — dashboards with several loaders, marketing pages with
multiple floating decorations — since each one independently stops
consuming resources the moment the tab is hidden. For developers, this
also means one less thing to remember: the component quietly handles
an easy-to-forget optimization without requiring any change to how the
animation itself is authored.

MotionOffscreenPause fits EaseMotion CSS's philosophy directly: it
introduces no animation engine, no keyframe generation, and no
stylesheet inspection. It only toggles `animation-play-state` on an
existing CSS animation class in response to a browser-level visibility
signal, leaving all actual motion defined in CSS and keeping the whole
system CSS-first.
