# Stacking Context Isolation & Layer Bleeding Patch

## What does this do?

This utility resolves z-index stacking context isolation failures and layer bleeding bugs inside sticky or fixed scrolling headers. It prevents GPU-accelerated sibling elements from bleeding over header bars during scrolls.

## How is it used?

Attach the stacking context isolation class to sticky or fixed header elements to protect them from overlay bleed leaks:

```html
<header class="sticky-header ease-stack-isolation-shield">
  <h3>Header Content</h3>
</header>

<main class="accelerated-page-content">
  <!-- Accelerated elements slide underneath correctly -->
</main>
```

## Why is it useful?

- **Restricts accelerated bleeding**: Sibling nodes with active GPU compositor states (`will-change`, `transform: translate3d`) automatically establish new stacking contexts. This layout patch isolates these contexts.
- **Independent Stacking Root**: Employs `isolation: isolate` combined with explicit z-indexing, forcing the header to form a clean parent stacking context that accelerated children cannot breach.
- **Maintains Header Transparency Blurs**: Preserves backdrop-filters and transparent background values without introducing graphic overlaps on mobile WebKit and Blink layout engines.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript)

## Preview

Open `demo.html` directly in your browser to inspect the side-by-side simulated panels and scroll behavior.
