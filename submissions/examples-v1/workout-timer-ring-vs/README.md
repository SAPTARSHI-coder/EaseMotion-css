# ease-workout-timer-ring

A pure HTML + CSS circular workout countdown timer ring. A foreground SVG
progress ring depletes clockwise over a 30-second countdown while its colour
shifts **green → yellow → red** as time runs out, mimicking the look of a real
fitness app interval timer.

## Files

- `demo.html` — semantic markup with the centered timer card and SVG ring.
- `style.css` — all styling and CSS keyframe animations (organised in sections).
- `README.md` — this file.

## 1. What does this do?

It renders a dark, modern workout-app timer card containing:

- An **exercise title** (e.g. *Jump Rope*, *Plank*, *Burpees*).
- A large **timer readout** (`00:30`) with a subtle pulse animation.
- A subtitle reading **“Workout Active”**.
- Optional **round / calorie / heart-rate** info.
- A **circular countdown ring** built from two SVG circles (a background track
  and a foreground progress ring) where the progress ring depletes clockwise via
  `stroke-dashoffset` (0 → 565) and **shifts colour from green to yellow to red**
  as time decreases.

Everything is driven purely by CSS keyframes — no JavaScript, no CDN, and no
external fonts, icons, or libraries.

## 2. How is it used?

1. Open the `submissions/examples/workout-timer-ring-vs/` folder.
2. Double-click **`demo.html`** (or open it via `File → Open` in any browser).
   It runs entirely on its own — no server, build step, or dependencies.

To customise:

- **Timer text:** edit `<p class="timer-ring__time">00:30</p>` in `demo.html`.
- **Exercise name:** edit the `<h2 id="exerciseTitle">` content.
- **Countdown duration:** change the `30s` values in the
  `wtRingDeplete` and `wtRingColorShift` keyframes inside `style.css`.
- **Ring colours:** tweak `--wt-ring-green`, `--wt-ring-yellow`,
  `--wt-ring-red` in the `:root` block.

The SVG uses `viewBox="0 0 220 220"` with `r="90"`, giving a circumference of
about **565** (`2π × 90`). The ring is rotated `-90deg` so the depletion starts
at the 12 o'clock position and travels **clockwise**.

## 3. Why is it useful?

- **Reusable UI building block** for fitness, HIIT, and interval-timer
  interfaces — the same pattern works for *Plank*, *Jump Rope*, *Burpees*, or any
  timed exercise.
- **Pure CSS** countdown demonstration: shows how `stroke-dasharray` /
  `stroke-dashoffset` can drive a smooth depletion animation with zero
  JavaScript, ideal for lightweight or offline-first apps.
- **Colour-coded urgency** (green → yellow → red) communicates remaining time at
  a glance, mirroring real fitness apps and improving usability.
- **Accessible & responsive**: semantic HTML, `role="timer"`, descriptive
  `aria-label`s, high-contrast palette, a `prefers-reduced-motion` fallback, and
  a layout that scales down for small screens.
