# Kinetic Sibling Proximity Grid

## What does this do?

A premium interactive grid layout system where hovering over a grid item tilts the targeted item in 3D and dynamically pushes/tilts neighboring elements away from it. This simulates physical magnetism and weight propagation purely in CSS, creating a highly polished, organic ripple movement across the grid without any JavaScript.

## How is it used?

Add the classes to your HTML markup:

```html
<div class="ease-kinetic-grid">
  <div class="ease-kinetic-item">
    <div class="ease-kinetic-content">
      <h3>Interactive Card 1</h3>
      <p>Hover to see proximity weight propagation.</p>
    </div>
  </div>
  <div class="ease-kinetic-item">
    <div class="ease-kinetic-content">
      <h3>Interactive Card 2</h3>
      <p>Adjacent cards shift back and rotate away.</p>
    </div>
  </div>
</div>
```

Modifiers can be appended to customize sensitivity and shift distances:

- `.proximity-subtle` on the grid parent to reduce the sibling translation scale (for cleaner, minimal micro-interactions).
- `.proximity-intense` on the grid parent to maximize the spacing shift.

## Why is it useful?

EaseMotion CSS is dedicated to human-readable, animation-first, zero-dependency components. This feature provides a highly interactive visual experience that typically requires heavy JavaScript physics libraries (such as GSAP or custom canvas layers). By achieving this effect using modern CSS (`:has()` selectors, sibling combinators, 3D translations, and smooth bezier curves), we maintain lightweight load times, complete composability, and premium design excellence.

## Tech Stack

- HTML
- CSS (no frameworks, no JavaScript, utilizing modern CSS `:has()` sibling matching selectors)

## Preview

Open `demo.html` directly in your browser to see the proximity interaction in action.

## Contribution Notes

- Class naming was handled by the contributor
- Maintainer will rename to ease-\* convention before merging
