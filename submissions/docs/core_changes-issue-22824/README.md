# ease-accordion — CSS-only Accordion Component

## What does this do?

Adds a fully styled accordion component built on native `<details>` / `<summary>` elements — no JavaScript required. Each item expands and collapses with a smooth `max-height` transition and a rotating chevron indicator.

## How is it used?

```html
<div class="ease-accordion">
  <details class="ease-accordion-item">
    <summary class="ease-accordion-trigger">
      <span>Accordion Title</span>
      <span class="ease-accordion-chevron"></span>
    </summary>
    <div class="ease-accordion-content">
      <p>Collapsible content goes here.</p>
    </div>
  </details>
</div>
```

Add the `open` attribute on `<details>` to start expanded:
```html
<details class="ease-accordion-item" open>
```

Customise colours via CSS custom properties:
```css
.ease-accordion {
  --ease-accordion-border: #e2e8f0;
  --ease-accordion-chevron-color: #10b981;
}
```

## Why is it useful?

Accordions are a common UI pattern — FAQs, documentation sidebars, settings panels, and feature lists all benefit from collapsible sections. This component fills a roadmap gap for EaseMotion CSS v1.3, is fully accessible (native `<details>`/`<summary>` provides keyboard navigation and ARIA attributes automatically), respects `prefers-reduced-motion`, and supports nested accordions, dark mode, and `@starting-style` for progressive enhancement.

Fixes #22824
