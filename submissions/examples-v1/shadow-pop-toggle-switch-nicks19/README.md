# Shadow Pop Toggle Switch (Cyberpunk Theme)

A pure CSS toggle switch component featuring a brutalist, Cyberpunk aesthetic. When toggled on, the switch physically translates up and left while casting a solid, unblurred "Shadow Pop" effect, giving it a highly tactile, mechanical feel.

## Features

- **Shadow Pop Effect**: Instead of a soft, glowing drop-shadow, this component uses a solid, offset `box-shadow` combined with a `transform: translate()` to make the element literally "pop" off the page when activated.
- **Brutalist / Cyberpunk Styling**: Abandons traditional rounded toggle switches in favor of sharp, 0px border-radius rectangles, thin neon borders, and tech-inspired grip lines on the thumb.
- **Pure CSS State**: Utilizes the standard `<input type="checkbox">` hidden behind the label, relying on the `:checked` pseudo-class to drive all animations.
- **Theming via CSS Variables**: Includes utility classes (`.ease-accent-magenta`, `.ease-accent-yellow`) to easily override the `--ease-toggle-accent` color variable.

## Installation

1. Copy the CSS from `style.css` into your project.
2. Copy the HTML structure from `demo.html`. Ensure the structure remains exactly as provided so the adjacent sibling selectors (`+`) in CSS function correctly.

## Usage Example

```html
<label class="ease-shadow-pop-toggle">
  <!-- Hidden Checkbox for State -->
  <input type="checkbox" class="ease-toggle-input">
  
  <!-- The Visual Track and Thumb -->
  <div class="ease-toggle-track">
    <div class="ease-toggle-thumb"></div>
  </div>
</label>
```

### Applying Different Colors

The default color is Cyan (`#00ffff`). You can apply modifier classes to the `.ease-toggle-track` to change the neon accent:

```html
<!-- Magenta Accent -->
<div class="ease-toggle-track ease-accent-magenta">...</div>

<!-- Yellow Accent -->
<div class="ease-toggle-track ease-accent-yellow">...</div>
```

## Why it fits EaseMotion CSS

- **Spring Physics**: The pop-out effect and the thumb slide both utilize EaseMotion's signature `cubic-bezier(0.34, 1.56, 0.64, 1)` timing function. This gives the mechanical switch a satisfying "snap" into place.
- **No JS Dependencies**: Fully interactive and stateful without a single line of JavaScript.
- **Hardware Acceleration**: The primary animations use `transform: translate()` rather than animating `top`/`left` or `margin`, ensuring smooth 60FPS rendering even on lower-end devices.
