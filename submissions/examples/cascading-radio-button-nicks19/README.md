# Cascading Radio Button (Neumorphism Theme)

A pure CSS animated radio button component utilizing a soft Neumorphism (soft UI) aesthetic and cascading rippling animations for the selected state.

## Features

- **Pure CSS**: Fully styled and animated without any JavaScript, using the CSS `:checked` pseudo-class.
- **Neumorphism Design**: Uses precise box-shadows to create convex (unselected) and concave (selected) shapes that appear extruded from the background.
- **Cascading Animation**: When selected, internal elements animate sequentially using staggered `animation-delay`, creating expanding ripples before the central dot pops into view.
- **Accessible**: Preserves standard keyboard navigation and focus states.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Structure your HTML identically to `demo.html`. Ensure your application's background color matches the `--ease-neu-base` variable so the neumorphic shadows blend correctly.

## Usage Example

```html
<label class="ease-radio-label">
  <input type="radio" name="plan" class="ease-radio-input">
  <span class="ease-radio-custom">
    <!-- Cascading animation rings -->
    <span class="ease-radio-ring ease-cascade-1"></span>
    <span class="ease-radio-ring ease-cascade-2"></span>
    <!-- Final center dot -->
    <span class="ease-radio-dot ease-cascade-3"></span>
  </span>
  <span class="ease-radio-text">Basic Tier</span>
</label>
```

## Why it fits EaseMotion CSS

- **Sequential Choreography**: Rather than a simple color flip, the component uses staggered `animation-delay` to create a multi-step sequence that guides the user's eye and feels highly responsive.
- **Physics-based Feel**: The final center dot pops in using the `cubic-bezier(0.34, 1.56, 0.64, 1)` spring curve, perfectly contrasting with the smooth linear ripples that preceded it.
- **Zero JS Dependency**: Showcases how complex state transitions involving multiple elements can be elegantly managed with CSS adjacent sibling combinators (`+`) and keyframes alone.
