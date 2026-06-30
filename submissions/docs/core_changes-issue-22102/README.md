# Stagger Animation Utility

## What does this do?

Adds a stagger animation utility that automatically applies sequenced delays to child elements — creating ripple-like reveal effects for lists, grids, and galleries with a single parent class and no manual delay calculations.

## How is it used?

**Staggered fade-in for a grid:**

```html
<div class="ease-stagger ease-stagger-fade-in">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</div>
```

**Custom stagger delay:**

```html
<div class="ease-stagger-200 ease-stagger-slide-in-up">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

## Why is it useful?

Stagger animations are one of the most common UI patterns — every list reveal, grid entrance, and accordion benefits from sequenced timing. Without a built-in utility, developers must manually calculate and apply `animation-delay` to every child element. This utility automates the entire process using CSS custom properties and optional IntersectionObserver-based JS for viewport-triggered reveals.
