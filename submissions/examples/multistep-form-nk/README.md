# Multi-Step Form — `multistep-form-nk`

## 1. What does this do?

An animated 3-step form wizard with directional slide transitions between steps, inline validation shake on empty submit, a bounce-select radio card picker, a live summary screen, and a drawn SVG checkmark success burst on completion — all visual transitions are CSS keyframes driven by state classes toggled by a minimal JS bridge.

---

## 2. How is it used?

### HTML structure

```html
<!-- Step indicator -->
<div class="msf-stepper" role="list">
  <div class="msf-step msf-step--active" data-step="1" role="listitem" aria-current="step">
    <div class="msf-step__bubble">
      <span class="msf-step__num">1</span>
    </div>
    <span class="msf-step__label">Profile</span>
  </div>
  <div class="msf-step__connector">
    <div class="msf-step__connector-fill" id="fill-1"></div>
  </div>
  <!-- repeat for steps 2, 3 -->
</div>

<!-- Progress bar -->
<div class="msf-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="33">
  <div class="msf-progress__fill" style="width:33%"></div>
</div>

<!-- Panes viewport -->
<div class="msf-viewport">
  <section class="msf-pane msf-pane--active" id="pane-1">...</section>
  <section class="msf-pane" id="pane-2" hidden>...</section>
  <section class="msf-pane" id="pane-3" hidden>...</section>
</div>
```

### State classes

| Class | Applied to | Effect |
|---|---|---|
| `msf-step--active` | `.msf-step` | Indigo bubble scale-up + glow |
| `msf-step--done` | `.msf-step` | Green bubble + drawn checkmark pop |
| `msf-connector-fill--active` | `.msf-step__connector-fill` | Connector fills green left→right |
| `msf-pane--exit-left` | `.msf-pane` | Slide out to the left (forward) |
| `msf-pane--enter-right` | `.msf-pane` | Slide in from the right (forward) |
| `msf-pane--exit-right` | `.msf-pane` | Slide out to the right (back) |
| `msf-pane--enter-left` | `.msf-pane` | Slide in from the left (back) |
| `msf-input--error` | `.msf-input` | Red border + glow |
| `msf-input--shake` | `.msf-input` | Horizontal shake animation |
| `msf-radio-shake` | `.msf-radio-card` | Shake on unselected submit |
| `msf-btn--submit` | `.msf-btn--primary` | Switches gradient to green for final step |

### JS bridge (minimal — only sets classes and moves focus)

```js
// Move forward with directional slide
fromPane.classList.add('msf-pane--exit-left');
toPane.classList.add('msf-pane--enter-right');

// Move back
fromPane.classList.add('msf-pane--exit-right');
toPane.classList.add('msf-pane--enter-left');

// Validation shake
input.classList.add('msf-input--shake');

// Mark step done
stepEl.classList.add('msf-step--done');
connectorFill.classList.add('msf-connector-fill--active');
```

All visual transitions are pure CSS. The JS orchestrates DOM state, class toggling, and focus management only.

---

## 3. Why is it useful?

Multi-step forms are one of the most common patterns on the web — onboarding flows, checkout, surveys, account setup. Most implementations use static page swaps or heavy JS libraries with no spatial sense of direction.

This component fits EaseMotion's philosophy because:

- **Motion communicates direction.** Going forward slides content left; going back slides right. Users always know where they are in the flow without reading a label.
- **Every state has a micro-animation.** The step bubble scales up on active, pops green on done, the progress bar fills smoothly, radio cards bounce on selection, inputs shake on invalid submit — each one delivers instant, clear feedback.
- **CSS does the heavy lifting.** All 8 keyframe animations (slide directions, shake, step-done pop, card-select bounce, SVG draw, success entrance) are pure CSS. The JS is ~120 lines and purely manages state — swap for React `useState`, Alpine `x-bind`, or HTMX without touching the stylesheet.
- **Accessible by default.** Steps use `role="list"` + `aria-current="step"`. Panes use `aria-label`. A `role="status"` live region announces every transition. Errors use `role="alert"` + `aria-live="assertive"`. `prefers-reduced-motion` collapses all durations to near-zero.
- **Zero dependencies.** Open `demo.html` directly in any modern browser — no server, no CDN, no build step.

---

## Animations used

| Animation | Trigger | Effect |
|---|---|---|
| `msf-fade-up` | Card on page load, summary pane | Fade + slide up entrance |
| `msf-step-done` | Step bubble on complete | Scale bounce pop to green |
| `msf-card-select` | Radio card / theme button on select | Subtle scale bounce |
| `msf-shake` | Invalid input / radio cards on error | Horizontal shake |
| `msf-exit-left` + `msf-enter-right` | Pane on forward navigation | Directional slide forward |
| `msf-exit-right` + `msf-enter-left` | Pane on back navigation | Directional slide back |
| `msf-success-entrance` | SVG container on submit | Scale pop entrance |
| `msf-draw-circle` | SVG circle on success | Stroke-dashoffset draw |
| `msf-draw-check` | SVG checkmark on success | Stroke-dashoffset draw |
| Shimmer sweep | Primary button on hover | Light sweep across gradient |

---

## Files

```
submissions/examples/multistep-form-nk/
├── demo.html   — self-contained demo, works by opening directly in a browser
├── style.css   — all styles, keyframes, and state transitions
└── README.md   — this file
```
