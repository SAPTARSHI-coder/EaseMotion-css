# Interactive Animation Playground

A self-contained, no-build-step playground for experimenting with EaseMotion CSS
animation timing. Adjust duration, delay, easing, iteration count, direction,
and fill mode, watch the preview update instantly, and copy the generated
HTML/CSS snippet.

Built as a response to the feature request for an **Interactive Animation
Playground**, placed under `submissions/examples/` per the current
contribution freeze (core, component, and doc files are untouched).

## Files

```
animation-playground-as073/
├── index.html   ← markup + control panel + preview stage
├── style.css    ← dark dashboard styling, local demo keyframes
├── script.js    ← control wiring, live preview, code generation, copy button
└── README.md    ← this file
```

## Features

- **Live preview** — the stage element re-plays instantly on every control change.
- **Controls** for animation type, duration, delay, easing (including two
  custom cubic-bezier presets for bounce/elastic feels), iteration count,
  direction, and fill mode.
- **Timeline readout** — a small progress bar under the stage visualizes how
  delay + duration play out, so the numbers on the sliders map to something
  visible.
- **Copy-to-clipboard** — generates a ready-to-paste HTML snippet and the
  matching CSS block (`animation-name`, `-duration`, `-timing-function`,
  `-delay`, `-iteration-count`, `-direction`, `-fill-mode`) with a single click.
- **Reset button** — restores every control to its default value.
- **Responsive** — the two-column layout collapses to a single column under
  800px, and all interactive elements have visible keyboard focus states.
- **Respects `prefers-reduced-motion`** — skips the automatic preview on load
  for users who have that OS-level preference set, matching the
  accessibility behavior already documented for EaseMotion CSS.

## Why a local keyframe set?

The playground defines its own `@keyframes` (named `ease-kf-*` to match the
project's internal naming convention) rather than importing `core/`, so this
submission stays fully self-contained and doesn't touch maintainer-only
files. The generated CSS snippet is written so it can be dropped into a
project alongside EaseMotion CSS directly — swap the `@keyframes` comment
for the real keyframe (already shipped in `core/animations.css`) and the
rest of the declaration is usable as-is.

## Try it locally

No build step required:

```bash
cd submissions/examples/animation-playground-as073
# open index.html directly, or serve it:
npx serve .
```

## Usage example

1. Pick an animation (e.g. `slide-up`).
2. Drag **Duration** to `450ms` and **Delay** to `100ms`.
3. Switch **Easing** to the bounce preset.
4. Click **Replay** to preview, then **Copy code** to grab the snippet:

```css
.ease-kf-slide-up {
  animation-name: ease-kf-slide-up;
  animation-duration: 450ms;
  animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  animation-delay: 100ms;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
}
```

## Possible follow-ups

- Wire the animation-type dropdown up to the *actual* shipped
  `core/animations.css` keyframes once a maintainer decides to integrate
  this into `examples/demo.html` directly.
- Add a "share as URL" option that encodes the current control state into
  query params.
