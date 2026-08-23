# Animated List to Grid View Transition

A lightweight FLIP-style layout transition for switching a collection between list and grid views.

## Overview

Switching between list and grid layouts normally causes items to jump instantly into their new positions.

This example keeps each item's visual identity while it moves from its previous position to its new position.

The transition uses the FLIP technique:

1. **First** — measure the current position.
2. **Last** — switch the layout and measure the new position.
3. **Invert** — calculate the difference between the two positions.
4. **Play** — animate the item from its old position to its new position.

This creates a smooth layout transition without requiring an animation library.

## Usage

The collection can use either the grid or list state:

```html
<div class="collection is-grid">
  <article class="item">
    Item one
  </article>

  <article class="item">
    Item two
  </article>
</div>
```

Switch to list:

```html
<div class="collection is-list">
  ...
</div>
```

The demo JavaScript handles the layout measurement and applies the FLIP transform.

## Example

```html
<div
  class="view-controls"
  role="group"
  aria-label="Choose layout"
>
  <button
    class="view-toggle is-active"
    data-view="grid"
    type="button"
  >
    Grid
  </button>

  <button
    class="view-toggle"
    data-view="list"
    type="button"
  >
    List
  </button>
</div>

<div class="collection is-grid">
  <article class="item">
    Design System
  </article>

  <article class="item">
    Motion Library
  </article>

  <article class="item">
    Components
  </article>

  <article class="item">
    Documentation
  </article>
</div>
```

## How It Works

The demo records each item's position before changing the layout.

```js
const previousPositions = capturePositions();
```

The collection is then switched between:

```css
.collection.is-grid {
  grid-template-columns:
    repeat(2, minmax(0, 1fr));
}

.collection.is-list {
  grid-template-columns: 1fr;
}
```

After the browser calculates the new layout, the difference between the old and new positions is calculated.

For example:

```text
Previous position
        ↓
     [Item]

        ↓ layout changes

New position
              [Item]

        ↓

FLIP calculates the difference

        ↓

Item visually moves from
the old position to the new one
```

The animation uses the Web Animations API:

```js
item.animate(
  [
    {
      transform:
        `translate(${deltaX}px, ${deltaY}px)
         scale(${scaleX}, ${scaleY})`
    },
    {
      transform:
        "translate(0, 0) scale(1, 1)"
    }
  ],
  {
    duration: 520,
    easing:
      "cubic-bezier(0.22, 1, 0.36, 1)",
    fill: "both"
  }
);
```

## Why FLIP?

Animating layout properties such as `grid-template-columns`, `width`, `top`, or `left` directly can be expensive or visually abrupt.

FLIP instead animates the item's transform from its previous position to its new position.

Transforms are well suited for smooth, performant motion.

## Accessibility

The example respects:

```css
@media (prefers-reduced-motion: reduce)
```

When reduced motion is enabled, the FLIP animation is skipped and the layout changes immediately.

The view controls also use:

```html
aria-pressed
```

so the currently selected layout can be communicated to assistive technologies.

## Design Goals

This example follows the EaseMotion CSS philosophy:

* **Human-readable** — `is-grid`, `is-list`, and `is-active` clearly describe UI states.
* **Animation-first** — motion communicates the relationship between the old and new layouts.
* **Composable** — the transition can be applied to different collections.
* **Lightweight** — no external animation library is required.
* **Context-preserving** — items remain visually connected while their positions change.

## Demo

Open `demo.html` directly in a browser.

Use the **Grid** and **List** controls to switch between layouts.

The demo works without a development server.

## Files

```text
animated-list-grid-transition/
├── demo.html
├── style.css
└── README.md
```

## Reduced Motion

Users with reduced-motion preferences will see the layout change without the FLIP animation.

## Contribution

This is a proposed EaseMotion CSS example.

The final EaseMotion class naming, timing, and framework integration can be standardized by the repository maintainer.
