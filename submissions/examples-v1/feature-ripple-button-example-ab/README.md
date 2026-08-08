# Ripple Button Example (`feature-ripple-button-example-ab`)

Standalone **Standard track** demo for [Issue #50778](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50778).

A beginner-friendly **ripple button** that acts as an attention seeker — click ripples expand from the pointer, and an optional soft looping ring gently draws focus.

---

## What it does

- Spawns a smooth material-style ripple on click / keyboard activation
- Supports **Primary**, **Success**, **Danger**, and **Outline** variants
- Optional `is-attention-ab` class for a soft looping attention ring
- Live playground to change variant, speed, and attention mode
- Fully keyboard accessible with reduced-motion support

---

## Folder structure

```
submissions/examples/feature-ripple-button-example-ab/
├── demo.html    ← interactive demo
├── style.css    ← ripple button styles + tokens
└── README.md    ← this file
```

---

## How to preview

Open `demo.html` directly in a browser (no build step):

```bash
# from repo root
start submissions/examples/feature-ripple-button-example-ab/demo.html
```

---

## Usage

```html
<button type="button" class="ripple-button-ab ripple-button-primary-ab">
  Hover me
</button>

<!-- Optional attention-seeker ring -->
<button
  type="button"
  class="ripple-button-ab ripple-button-primary-ab is-attention-ab"
>
  Notice me
</button>
```

### Classes

| Class | Purpose |
| --- | --- |
| `ripple-button-ab` | Base button + ripple host |
| `ripple-button-primary-ab` | Primary color |
| `ripple-button-success-ab` | Success color |
| `ripple-button-danger-ab` | Danger color |
| `ripple-button-outline-ab` | Outline style |
| `is-attention-ab` | Soft looping attention ring |
| `ripple-ink-ab` | Generated ink span (JS) |

### CSS tokens

```css
:root {
  --ripple-button-speed-ab: 650ms;           /* click ripple duration */
  --ripple-button-attention-speed-ab: 1.8s;  /* attention ring cycle */
}
```

---

## Why this is useful

Buttons often need a clear press response or a gentle “look here” cue. This demo covers both:

1. **Click feedback** — pointer-origin ripple for tactile feel
2. **Attention seeker** — soft expanding rings without blocking interaction
3. **Accessible defaults** — real buttons, focus rings, reduced-motion fallback

A strong candidate for later curation into an `ease-*` utility by the maintainer.

---

## Accessibility

- Native `<button>` elements (not clickable `<div>`s)
- Visible `:focus-visible` outlines
- Decorative ripple layers use `aria-hidden`
- Attention rings pause while the button is keyboard-focused
- Under `prefers-reduced-motion: reduce`, ripples and attention rings are disabled

---

## Unique identifier

All custom classes and tokens use the **`-ab`** suffix to avoid collisions with other submissions.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/examples/feature-ripple-button-example-ab/`
- [x] Unique identifier appended to folder and classes
- [x] Smooth ripple effect implemented
- [x] Accessibility + `prefers-reduced-motion` handled
- [x] README explains what / how / why
