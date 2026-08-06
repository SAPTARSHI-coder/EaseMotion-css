# Stagger Delay Utility

A lightweight, zero-configuration CSS container utility that automatically applies incremental animation delays to direct child elements.

## 1. What does this do?

It automatically offsets the animation start times of direct children in sequential order, removing the need to manually assign distinct delay classes (like `delay-100`, `delay-200`, etc.) to individual elements.

## 2. How is it used?

Apply the `.stagger-container` class to a parent element, and apply any standard animation class to its children:

```html
<div class="stagger-container">
  <div class="anim-slide-up">Item 1</div>
  <div class="anim-slide-up">Item 2</div>
  <div class="anim-slide-up">Item 3</div>
</div>
```

### Stagger Step Modifiers

By default, the delay increment (step) is `100ms`. Customize the step duration by adding modifier classes to the container:

- **Fast**: `.stagger-fast` (delay steps of `50ms`)
- **Slow**: `.stagger-slow` (delay steps of `250ms`)
- **Very Slow**: `.stagger-very-slow` (delay steps of `500ms`)

Example:

```html
<div class="stagger-container stagger-fast">
  <div class="anim-fade-in">Item 1</div>
  <div class="anim-fade-in">Item 2</div>
</div>
```

### Startup (Base) Delay Modifiers

Optionally delay the start of the entire stagger sequence by adding:

- `.stagger-delay-100` (starts after `100ms`)
- `.stagger-delay-200` (starts after `200ms`)
- `.stagger-delay-500` (starts after `500ms`)
- `.stagger-delay-1000` (starts after `1000ms`)

### Custom Stagger Order or Indexes

To stagger elements out of order (e.g. reverse stagger) or manually override indexes, set the `--stagger-index` custom property on individual children:

```html
<!-- Reverse stagger 3 items -->
<div class="stagger-container">
  <div class="anim-fade-in" style="--stagger-index: 2;">
    Item 1 (animates third)
  </div>
  <div class="anim-fade-in" style="--stagger-index: 1;">
    Item 2 (animates second)
  </div>
  <div class="anim-fade-in" style="--stagger-index: 0;">
    Item 3 (animates first)
  </div>
</div>
```

## 3. Why is it useful?

Faking staggered entrance animations on menus, lists, or grids typically requires developers to manually add incremental delay classes to every list item or card, which is tedious and breaks if the order or number of items changes dynamically. This utility handles it automatically using pure CSS `:nth-child` indices up to 24 items, keeping markup semantic and clean, while respecting user accessibility requirements via `prefers-reduced-motion: reduce`.
