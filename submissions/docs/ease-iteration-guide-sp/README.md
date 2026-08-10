# EaseMotion Loop Iteration Control Visualizer

An interactive documentation showcase for the `--ease-animation-iterations` CSS variable — control loop counts on bounce, pulse, ping, and rotate animations with a slider from 1 to infinite, with live preview.

> Submission track: `submissions/docs/ease-iteration-guide-sp/`  
> Contributor suffix: `sp`  
> Resolves: Issue #43345

---

## What does this do?

Looping EaseMotion animations like `ease-bounce`, `ease-pulse`, `ease-ping`, and `ease-rotate` use the CSS variable `--ease-animation-iterations`. By default it is `infinite`, but you can override it once in `:root` to limit how many times loops run.

This visualizer makes that variable tangible:

- **Slider control** from 1 to 10 (10 = infinite)
- **Infinite toggle** for quick switching
- **Live 4-up preview** of all four looping animations
- **Side-by-side comparison** of bounce at 1×, 3×, and infinite
- **Copy-ready `:root` override** for your own project

## How is it used?

1. Open `demo.html` in a browser (EaseMotion CSS loads from jsDelivr CDN).
2. Move the **loop count slider** (1–9 = finite, 10 = infinite).
3. Or toggle **Force infinite looping** on/off.
4. Click a **quick preset** (1×, 2×, 3×, 5×, ∞) for common values.
5. Watch all four animations update their loop behavior in real time.
6. Compare the **side-by-side bounce panels** to see finite vs infinite.
7. Press **Copy CSS** to grab the `:root` override.
8. Press **Replay all** to restart animations from the beginning.

## Example output

Limit all looping animations to 3 iterations:

```css
:root {
  --ease-animation-iterations: 3;
}
```

## Affected animation classes

| Class | Behavior |
|-------|----------|
| `ease-bounce` | Vertical bounce loop |
| `ease-pulse` | Scale pulse loop |
| `ease-ping` | Expanding ring loop |
| `ease-rotate` | Continuous spin loop |

All read `--ease-animation-iterations` from the cascade — set it once, affect every looping utility.

## Features

- Slider control for iteration count from 1 to infinite
- Live preview of bounce, pulse, ping, and rotate animations
- Real-time update of `--ease-animation-iterations` across all demo elements
- Side-by-side comparison at 1, 3, and infinite iterations
- Copy-to-clipboard output for customized `:root` CSS variable
- Quick presets and replay button
- `prefers-reduced-motion` respected (EaseMotion CSS minimizes motion globally)

## Files

| File | Purpose |
|------|---------|
| `demo.html` | Visualizer UI + iteration control logic |
| `style.css` | Layout styles using `--ease-*` tokens |
| `README.md` | This document |

## Compliance notes

- Only **new files** inside `submissions/docs/`.
- Uses official CDN bundle (`easemotion.min.css`).
- Folder name carries the unique contributor suffix `-sp`.
