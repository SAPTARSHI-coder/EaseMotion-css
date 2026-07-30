# Ease Favorite Heart Toggle

A responsive, accessible favorite heart toggle built with pure HTML, CSS, and EaseMotion utility classes.

## What does it do?

This example provides an animated heart toggle that allows users to mark items as favorites without JavaScript. It uses a native checkbox for state management, making it keyboard accessible while delivering smooth visual feedback through CSS animations.

The component is suitable for:

- Product cards
- Wishlists
- Saved articles
- Media galleries
- Dashboard widgets
- E-commerce interfaces

---

## How is it used?

Include the repository-local EaseMotion stylesheet before the component stylesheet:

```html
<link rel="stylesheet" href="../../../easemotion.min.css">
<link rel="stylesheet" href="style.css">
```

Create a native checkbox paired with a label:

```html
<div class="favorite-control-fht">
  <input
    class="favorite-input-fht"
    type="checkbox"
    id="favorite-toggle-fht"
  >

  <label
    class="favorite-label-fht ease-hover-grow"
    for="favorite-toggle-fht"
  >
    <span class="favorite-icon-fht" aria-hidden="true">
      <!-- Heart SVG -->
    </span>

    <span class="favorite-text-fht">
      <span class="favorite-off-text-fht">Add to favorites</span>
      <span class="favorite-on-text-fht">Saved to favorites</span>
    </span>
  </label>
</div>
```

The example uses existing EaseMotion utility classes, including:

- `ease-btn`
- `ease-btn-primary`
- `ease-btn-pill`
- `ease-hover-grow`
- `ease-fade-in`
- `ease-slide-up`
- `ease-delay-100`

---

## Features

- Pure HTML and CSS
- No JavaScript required
- Native checkbox state management
- Animated heart pop effect
- Decorative burst animation
- Checked and unchecked labels
- Responsive layouts
- Keyboard accessible
- Uses EaseMotion utility classes
- Customizable with CSS variables
- Supports `prefers-reduced-motion`

---

## Accessibility

- Uses a native checkbox for semantic interaction.
- Supports keyboard navigation and Space key activation.
- Large label provides an accessible click target.
- Includes visible `:focus-visible` styles.
- Decorative SVG icons are hidden from assistive technologies.
- Text communicates both favorite states.
- Includes a skip link for keyboard users.
- Honors `prefers-reduced-motion` preferences.

---

## Responsive Behavior

- Two-column product card on larger screens.
- Single-column layout on tablets and mobile devices.
- Favorite controls remain easy to tap on touch devices.
- Compact variant works well in cards and lists.

---
