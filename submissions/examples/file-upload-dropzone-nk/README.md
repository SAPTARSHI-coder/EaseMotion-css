# File Upload Dropzone — `file-upload-dropzone-nk`

## 1. What does this do?

An animated file upload dropzone that cycles through four CSS-driven states — idle (marching dashed border + icon bounce on hover), drag-over (zone pulse + scale pop), uploading (circular SVG progress ring sweep), and success (drawn SVG checkmark burst) — all transitions triggered by `data-state` attribute and state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<div class="fud-zone" id="fud-zone" role="button" tabindex="0"
     data-state="idle" aria-label="File upload area">

  <input class="fud-input" type="file" />

  <!-- Idle state -->
  <div class="fud-state fud-state--idle fud-state--active" id="state-idle">
    <svg class="fud-dashed-border" viewBox="0 0 400 200" preserveAspectRatio="none">
      <rect class="fud-dash-rect" x="2" y="2" width="396" height="196" rx="14"/>
    </svg>
    <div class="fud-idle__body">...</div>
  </div>

  <!-- Drag-over state -->
  <div class="fud-state fud-state--dragover" id="state-dragover" hidden>...</div>

  <!-- Uploading state with progress ring -->
  <div class="fud-state fud-state--uploading" id="state-uploading" hidden>
    <div class="fud-ring-wrap">
      <svg class="fud-ring-svg" viewBox="0 0 80 80">
        <circle class="fud-ring-track" cx="40" cy="40" r="32"/>
        <circle class="fud-ring-fill"  cx="40" cy="40" r="32" id="fud-ring-fill"/>
      </svg>
      <span class="fud-ring-pct" aria-live="polite">0%</span>
    </div>
  </div>

  <!-- Success state -->
  <div class="fud-state fud-state--success" id="state-success" hidden>
    <svg class="fud-success__svg" viewBox="0 0 80 80">
      <circle class="fud-success__circle" cx="40" cy="40" r="34"/>
      <path   class="fud-success__check" d="M24 40l10 10 22-22"/>
    </svg>
  </div>

</div>
```

### State transitions

| `data-state` | Active class | Visual |
|---|---|---|
| `idle` | `fud-state--idle` | Marching dashed border + icon bounce on hover |
| `dragover` | `fud-state--dragover` | Zone scale-pulse + indigo background fill |
| `uploading` | `fud-state--uploading` | SVG progress ring sweeps from 0→100% |
| `success` | `fud-state--success` | Circle draw + checkmark draw + fade-up text |

### JS bridge (minimal — only sets `data-state` and `strokeDashoffset`)

```js
// Show a state
zone.setAttribute('data-state', 'uploading');

// Update progress ring (circumference = 2π × 32 ≈ 201.06)
const CIRCUMFERENCE = 201.06;
ringFill.style.strokeDashoffset = CIRCUMFERENCE - (pct / 100) * CIRCUMFERENCE;

// Trigger error shake
zone.classList.add('fud-zone--error');
```

All visual transitions — dashed march, icon bounce, dragover pulse, ring sweep, circle draw, checkmark draw, success entrance — are pure CSS. The JS manages state and computes `strokeDashoffset` only.

---

## 3. Why is it useful?

File uploads are one of the most anxiety-inducing interactions on the web. Users don't know if the drag worked, how long it will take, or if it succeeded. Static zones with no animation provide zero feedback.

This component fits EaseMotion's philosophy because:

- **Motion replaces anxiety with confidence.** The marching dashes say "this is interactive." The bounce icon says "drop here." The ring sweep gives live progress. The checkmark draw says "done" in a way a static success message never can.
- **CSS does the heavy lifting.** All 7 keyframes (dash-march, icon-bounce, dragover-pulse, fade-up, success-entrance, draw-circle, draw-check) are pure CSS. The JS is ~100 lines and only manages state transitions and the `strokeDashoffset` calculation — swap it for any framework without touching the stylesheet.
- **Accessible by default.** The zone uses `role="button"` + `tabindex="0"` for keyboard access. A `role="status"` live region announces every state change. Progress uses `aria-live="polite"`. `prefers-reduced-motion` collapses all durations to near-zero.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `fud-fade-up` | Card, state panes on mount | Fade + slide up entrance |
| `fud-dash-march` | `.fud-dash-rect` on hover/dragover | Dashed border marches infinitely |
| `fud-icon-bounce` | Upload icon on hover | Vertical bounce |
| `fud-dragover-pulse` | `.fud-state--dragover` on enter | Zone scale pop + indigo bg |
| `fud-shake` | `.fud-zone--error` on oversized file | Horizontal shake |
| `fud-success-entrance` | SVG container on success | Scale pop from 0.6 → 1 |
| `fud-draw-circle` | `.fud-success__circle` | Stroke-dashoffset draw |
| `fud-draw-check` | `.fud-success__check` | Stroke-dashoffset draw (delayed) |

---

## Files

```
submissions/examples/file-upload-dropzone-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```
