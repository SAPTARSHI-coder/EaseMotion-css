# Ripple Wave Interactive Button - EaseMotion CSS

A micro-interaction action button component with pure CSS `:active` pseudo-element ripple expansion.

## 1. What does this do?
This component renders tactile action buttons that output expanding circular ripple wave feedback on mouse clicks and key presses.

## 2. How is it used?
Link `style.css` and wrap button labels inside a `.ripple-btn` element:

```html
<link rel="stylesheet" href="style.css">

<button class="ripple-btn ripple-primary">
  <span>Click Me</span>
</button>
```

## 3. Why is it useful?
- **Zero JavaScript:** Achieves radial ripple explosion effects using pure CSS pseudo-elements (`::after`).
- **Tactile Feedback:** Enhances visual responsiveness for user submit and action triggers.
- **Focus Visible Styling:** Includes explicit focus ring styles for WCAG accessibility.
