# ease-accordion — CSS-Only Accordion Component

## What does this do?

Provides an accordion/collapse component built purely with CSS using the native `<details>`/`<summary>` HTML elements. No JavaScript required. Supports single and exclusive (accordion) modes, smooth open/close animation, and custom icon indicators.

## How is it used?

```html
<div class="ease-accordion">
  <details class="ease-accordion-item" open>
    <summary class="ease-accordion-header">Section 1</summary>
    <div class="ease-accordion-content">
      <p>Content for section 1.</p>
    </div>
  </details>
  <details class="ease-accordion-item">
    <summary class="ease-accordion-header">Section 2</summary>
    <div class="ease-accordion-content">
      <p>Content for section 2.</p>
    </div>
  </details>
</div>
```

For exclusive mode (only one open at a time), use `<details name="accordion">`:

```html
<div class="ease-accordion">
  <details name="accordion-x" class="ease-accordion-item">
    <summary>...</summary>
    <div class="ease-accordion-content">...</div>
  </details>
  <details name="accordion-x" class="ease-accordion-item">
    <summary>...</summary>
    <div class="ease-accordion-content">...</div>
  </details>
</div>
```

### Variants

| Modifier                   | Effect                               |
| -------------------------- | ------------------------------------ |
| (none)                     | Default accordion with `+`/`×` icon  |
| `.ease-accordion-chevron`  | Chevron `▾`/`▴` icon instead of plus |
| `.ease-accordion-bordered` | Bordered items with rounded corners  |
| `.ease-accordion-flush`    | No borders, minimal style            |

## CSS Custom Properties

| Property                      | Default | Description                   |
| ----------------------------- | ------- | ----------------------------- |
| `--ease-accordion-transition` | `300ms` | Open/close animation duration |

## Why is it useful?

Accordions are essential for FAQs, documentation sidebars, settings panels, and any space-constrained content that needs progressive disclosure. This component is zero-dependency, accessible, and works without JavaScript.

## Features

- CSS-only — works without JavaScript
- Built on `<details>`/`<summary>` for native accessibility
- Exclusive mode via `name` attribute (HTML native)
- Smooth open/close animation using CSS transitions
- Two icon styles: plus/cross and chevron
- Three visual variants: default, bordered, flush
- Keyboard accessible (Enter/Space to toggle)
- Respects `prefers-reduced-motion`
