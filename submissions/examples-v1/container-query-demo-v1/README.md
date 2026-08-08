# Container Query Demo — Width-Aware Responsive Cards

Demonstrates CSS container queries (`@container`) with cards that adapt their internal layout based on their own container's width, not the browser viewport.

## What does this do?

Each `.cq-card` establishes its own containment context via `container-type: inline-size` and `container-name: cq-card`. As the container's available width grows, the card progressively switches from a stacked layout to horizontal, then scales up its media size, typography, and padding — all via `@container` queries scoped to that single card's container, completely independent of every other card on the page or the viewport size.

## How is it used?

```html
<div class="cq-card">
  <div class="cq-card-inner">
    <div class="cq-card-media"></div>
    <div>
      <h4 class="cq-card-title">Title</h4>
      <p class="cq-card-desc">Description</p>
    </div>
  </div>
</div>
```

```css
.cq-card {
  container-type: inline-size;
  container-name: cq-card;
}

@container cq-card (min-width: 280px) {
  .cq-card-inner { flex-direction: row; }
}

@container cq-card (min-width: 420px) {
  .cq-card-media { width: 110px; height: 110px; }
}
```

## Why is this useful?

Traditional media queries respond to viewport size, which breaks down for reusable components placed in varying contexts — a sidebar widget, a grid cell, a full-width hero. Container queries let the same card component look correct everywhere it's dropped, based purely on the space actually available to it.

## Tech Stack

- HTML
- Plain CSS (container queries) — no EaseMotion utility classes needed beyond design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`)
- No JavaScript

## Accessibility

Includes `@media (prefers-reduced-motion: reduce)` to disable the card's hover shadow transition for users who prefer reduced motion.

## Preview

Open `demo.html` directly in your browser. Drag the resizable dashed box to see one card adapt live, or view the card grid below it to see the same component at three different container widths simultaneously.

## Why it fits EaseMotion CSS

`core/utilities.css` already applies `container-type`/`container-name` to the global `.ease-container` page wrapper, establishing the pattern. This demo extends that same container-query approach to component-level cards, using the framework's existing design tokens (`--ease-color-*`, `--ease-space-*`, `--ease-radius-*`).

Closes #11307
