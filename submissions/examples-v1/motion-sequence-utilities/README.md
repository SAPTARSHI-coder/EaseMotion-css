# Motion Sequence Utilities

## Feature overview

Motion Sequence Utilities adds a reusable CSS pattern for automatically staggering child animations inside a parent container.

This feature is built to work with EaseMotion CSS entrance utilities like `ease-fade-in`, `ease-slide-up`, and `ease-zoom-in`.

## Problem statement

Animating groups of cards, nav items, or widgets often requires manually assigning `animation-delay` values to every child. That workflow becomes repetitive, brittle, and hard to maintain as group size changes.

## How it works

A parent element receives one of the sequence classes:

- `.sequence` — default pacing
- `.sequence-fast` — tighter stagger
- `.sequence-slow` — slower, more dramatic staging

Each direct child receives a progressively larger delay via `:nth-child()` selectors. The first child starts immediately, the second child waits a little longer, the third waits more, and so on.

The result is a clean, declarative, CSS-only sequence system that scales without manual delay helpers.

## Available presets

- `.sequence` — default delays: `0ms`, `100ms`, `200ms`, `300ms`, ...
- `.sequence-fast` — fast delays: `0ms`, `75ms`, `150ms`, `225ms`, ...
- `.sequence-slow` — slow delays: `0ms`, `150ms`, `300ms`, `450ms`, ...

## Usage examples

```html
<div class="sequence ease-slide-up">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
  <div class="card">Item 4</div>
</div>
```

```html
<ul class="sequence-fast">
  <li class="ease-fade-in">Home</li>
  <li class="ease-fade-in">Products</li>
  <li class="ease-fade-in">Pricing</li>
</ul>
```

```html
<div class="sequence-slow ease-zoom-in">
  <article>Primary metric</article>
  <article>Secondary metric</article>
  <article>Support note</article>
</div>
```

## Benefits

- Pure CSS solution with no JavaScript
- Reduces manual delay management
- Works with existing EaseMotion entrance classes
- Keeps markup simple and easy to maintain
- Supports at least 10 children in a seamless sequence

## Future improvements

- Add CSS custom property support for custom step sizes
- Extend to support different delay curves per section
- Add helper classes for horizontal, vertical, or grid-based sequence flows
- Add optional sequence direction control with `reverse` support
