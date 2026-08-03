# Ease Tooltip

## What does this do?

Displays animated tooltips that spring into view from any of four directions (top, bottom, left, right) when an element is hovered or focused, using a smooth elastic-scale + fade transition entirely in CSS.

## How is it used?

Wrap any trigger element with a `.tooltip` container and add a `.tooltip-bubble` sibling:

```html
<!-- Default: appears above -->
<span class="tooltip">
  <button type="button">Save</button>
  <span class="tooltip-bubble" role="tooltip">Save your changes</span>
</span>
```

### Position modifiers

Add a placement class to the `.tooltip` wrapper:

```html
<span class="tooltip is-bottom"> … </span>   <!-- below the trigger -->
<span class="tooltip is-left">   … </span>   <!-- left of the trigger -->
<span class="tooltip is-right">  … </span>   <!-- right of the trigger -->
```

### Colour themes

```html
<span class="tooltip theme-primary"> … </span>   <!-- violet   -->
<span class="tooltip theme-success"> … </span>   <!-- green    -->
<span class="tooltip theme-warning"> … </span>   <!-- amber    -->
<span class="tooltip theme-danger">  … </span>   <!-- red      -->
<span class="tooltip theme-light">   … </span>   <!-- light    -->
```

### Appearance delays

```html
<span class="tooltip delay-100"> … </span>   <!-- 100 ms -->
<span class="tooltip delay-200"> … </span>   <!-- 200 ms -->
<span class="tooltip delay-300"> … </span>   <!-- 300 ms -->
```

### Combining modifiers

```html
<span class="tooltip is-right theme-success delay-200">
  <button type="button">Confirm</button>
  <span class="tooltip-bubble" role="tooltip">Changes saved!</span>
</span>
```

## Why is it useful?

EaseMotion CSS is built on the principle that motion should be expressive and composable. Tooltips are one of the most commonly repeated UI patterns, yet they are almost always implemented with JavaScript or reached for as a dependency. This submission provides a zero-JavaScript, accessible tooltip that:

- **Fits the EaseMotion philosophy** — positions, themes, and delays are opt-in modifier classes, readable and composable just like `ease-fade-in` or `ease-delay-200`.
- **Uses CSS transitions** with an elastic easing curve that matches EaseMotion's expressive motion language (`cubic-bezier(0.34, 1.56, 0.64, 1)`), giving each tooltip a subtle spring pop that feels alive without being distracting.
- **Is fully keyboard-accessible** — the tooltip activates on `:focus-within`, surfaces `role="tooltip"` to screen readers, and respects `prefers-reduced-motion`.
- **Requires no server or build step** — `demo.html` opens directly in any modern browser.

Once curated, the maintainer can standardise the class names to `ease-tooltip`, `ease-tooltip-bottom`, `ease-tooltip-primary`, etc., and integrate the keyframe/transition logic into `core/animations.css`.
