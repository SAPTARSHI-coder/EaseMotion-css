# Animated Accordion / Collapsible FAQ

A pure CSS animated accordion built on native `<details>` and `<summary>` HTML elements. Uses the `grid-template-rows: 0fr → 1fr` technique for smooth height animation and a CSS-only rotating chevron indicator. Zero JavaScript required.

---

## Overview

- **Animation technique:** `grid-template-rows` transition from `0fr` to `1fr` on the body wrapper, which animates the height from zero to full without needing `max-height` hacks.
- **Chevron:** `transform: rotate(90deg)` applied to `.ease-accordion__chevron` when `details[open]`.
- **Accessibility:** Native `<details>` / `<summary>` is keyboard-navigable and screen-reader friendly. `aria-hidden="true"` on the decorative chevron. `focus-visible` outline for keyboard users.
- **Dark mode:** All colors use CSS custom properties.
- **Reduced motion:** Transitions are disabled when `prefers-reduced-motion: reduce` is active.

---

## Usage

```html
<div class="ease-accordion">
  <details class="ease-accordion__item">
    <summary class="ease-accordion__header">
      Your question here
      <span class="ease-accordion__chevron" aria-hidden="true">▸</span>
    </summary>
    <div class="ease-accordion__body">
      <p>Your answer here.</p>
    </div>
  </details>
</div>
```

Add the `open` attribute to a `<details>` element to have it expanded on page load.

### CSS Variable Reference

| Variable               | Default | Description                    |
| ---------------------- | ------- | ------------------------------ |
| `--accordion-duration` | `0.35s` | Open/close transition duration |
