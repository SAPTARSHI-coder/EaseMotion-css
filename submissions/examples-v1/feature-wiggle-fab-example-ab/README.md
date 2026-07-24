# Wiggle FAB Example (`feature-wiggle-fab-example-ab`)

Standalone **Standard track** demo for [Issue #50779](https://github.com/SAPTARSHI-coder/EaseMotion-css/issues/50779).

A floating action button (FAB) that enters the viewport with a smooth **wiggle** animation, then settles into a calm hover/focus attention state.

---

## What it does

- Plays an entrance wiggle (`rotate` + slight `translateX` + scale) when the FAB appears
- Supports **Primary**, **Success**, **Danger**, and **Extended** variants
- Exposes intensity tokens so developers can tune how playful the motion feels
- Includes a live playground: replay entrance, change intensity, switch variant
- Mirrors the selected variant on a fixed corner FAB (typical product placement)

---

## Folder structure

```
submissions/examples/feature-wiggle-fab-example-ab/
├── demo.html    ← interactive demo
├── style.css    ← wiggle FAB styles + tokens
└── README.md    ← this file
```

---

## How to preview

Open `demo.html` directly in a browser (no build step):

```bash
# from repo root
start submissions/examples/feature-wiggle-fab-example-ab/demo.html
```

Or serve the folder with any static server.

---

## Usage

```html
<button
  type="button"
  class="wiggle-fab-ab wiggle-fab-primary-ab is-wiggling-ab"
  aria-label="Compose new note"
>
  <span class="wiggle-fab-icon-ab" aria-hidden="true">+</span>
  <span class="wiggle-fab-label-ab">Compose</span>
</button>
```

### Classes

| Class | Purpose |
| --- | --- |
| `wiggle-fab-ab` | Base FAB styles |
| `wiggle-fab-primary-ab` | Primary color |
| `wiggle-fab-success-ab` | Success color |
| `wiggle-fab-danger-ab` | Danger color |
| `wiggle-fab-extended-ab` | Pill shape with visible text label |
| `wiggle-fab-fixed-ab` | Fixed bottom-right placement |
| `is-wiggling-ab` | Triggers the entrance wiggle once |

### CSS tokens

```css
:root {
  --wiggle-fab-rotate-ab: 8deg; /* peak rotation */
  --wiggle-fab-nudge-ab: 4px;   /* side nudge */
  --wiggle-fab-speed-ab: 650ms; /* entrance duration */
}
```

### Replay the entrance

Remove `is-wiggling-ab`, force a reflow, then add it again (see `demo.html` script).

---

## Why this is useful

FABs are easy to miss on dense UIs. A short entrance wiggle draws attention without needing a looping animation that never stops. The pattern is:

1. **Notice me** on first paint (wiggle enter)
2. **Stay calm** afterward (static + subtle hover)
3. **Stay accessible** with labels, focus rings, and reduced-motion fallbacks

This makes a strong candidate for later curation into an `ease-*` utility by the maintainer.

---

## Accessibility

- Real `<button>` elements (not clickable `<div>`s)
- `aria-label` on icon-led FABs
- Visible `:focus-visible` rings
- Skip link to main content
- Under `prefers-reduced-motion: reduce`, the wiggle is replaced by a short opacity fade
- Hover attention wiggle only runs when `(hover: hover) and (pointer: fine)`

---

## Unique identifier

All custom classes and tokens use the **`-ab`** suffix to avoid collisions with other submissions, as required by the contribution policy.

---

## Checklist (issue acceptance)

- [x] Files live under `submissions/examples/feature-wiggle-fab-example-ab/`
- [x] Unique identifier appended to folder and classes
- [x] Smooth entrance wiggle effect
- [x] Accessibility + `prefers-reduced-motion` handled
- [x] README explains what / how / why
