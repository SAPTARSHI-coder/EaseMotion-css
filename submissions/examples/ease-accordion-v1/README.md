# EaseMotion — `ease-accordion`

Pure-CSS collapsible sections with smooth `max-height` animation. Supports both multi-open (checkbox) and single-open (radio) modes.

---

## Features

- **CSS-only** — hidden checkbox/radio inputs drive open/close state
- **Multi-open mode** — each panel toggles independently via checkboxes
- **Single-open mode** — only one panel open at a time via radio buttons
- **Animated chevron** — rotates 45° → -135° on open/close
- **Uses design tokens** — references `--ease-color-*`, `--ease-space-*`, `--ease-speed-*` from `core/variables.css`
- **Dark mode** — automatic via `prefers-color-scheme: dark`
- **Reduced motion** — disables transitions when `prefers-reduced-motion: reduce`

---

## Usage

### Multi-open (checkbox)

```html
<div class="ease-accordion">
  <div class="ease-accordion-item">
    <input type="checkbox" id="panel-1" class="ease-accordion-toggle" checked />
    <label for="panel-1" class="ease-accordion-header">
      <span>Title</span>
      <span class="ease-accordion-icon"></span>
    </label>
    <div class="ease-accordion-body">
      <div class="ease-accordion-body-inner">Content goes here...</div>
    </div>
  </div>
  <!-- more items -->
</div>
```

### Single-open (radio)

```html
<div class="ease-accordion">
  <div class="ease-accordion-item">
    <input
      type="radio"
      id="step-1"
      name="my-accordion"
      class="ease-accordion-toggle"
      checked
    />
    <label for="step-1" class="ease-accordion-header">...</label>
    <div class="ease-accordion-body">...</div>
  </div>
  <!-- more items with the same name attribute -->
</div>
```

---

## CSS Variables

| Variable                       | Description                                                        |
| ------------------------------ | ------------------------------------------------------------------ |
| `--ease-accordion-item-border` | Override the item border (default uses `--ease-color-neutral-200`) |
| `--ease-accordion-item-bg`     | Override the item background                                       |

---

## How it works

1. The hidden checkbox/radio toggle receives focus from the `<label>` on click
2. `:checked ~ .ease-accordion-body` triggers `max-height` transition from `0` to `500px`
3. `:checked ~ .ease-accordion-header .ease-accordion-icon::after` rotates the chevron
4. Radio inputs sharing the same `name` attribute automatically close each other

---

## Why does it fit EaseMotion CSS?

Accordions are a fundamental UI pattern for FAQ pages, documentation sidebars, settings panels, and feature toggles. The roadmap in VISION.md lists collapsible components as a planned addition. This component provides both multi-open and single-open modes with smooth animation, using existing design tokens.

---

## Files

1. **`style.css`** — component CSS with both toggle modes
2. **`demo.html`** — interactive demo (FAQ + step-by-step workflow)
3. **`README.md`** — documentation and usage examples

---

## Notes

- Uses `max-height: 500px` for the body transition — if your content is taller, increase this value or use the `interpolate-size: allow-keywords` technique (see `@supports`).
- The chevron is drawn entirely with CSS (`::after` + border + rotate) — no icon font or SVG required.
- All toggle inputs are visually hidden via `clip: rect()` — fully keyboard accessible.
