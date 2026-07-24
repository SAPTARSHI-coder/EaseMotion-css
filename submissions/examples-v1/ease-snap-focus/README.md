# Ease Snap Focus

## Feature overview
A lightweight interaction utility that subtly pulls nearby sibling cards toward the hovered or focused item, producing a magnetic group effect without shifting the layout.

## Installation
Include the demo files in your project and add the stylesheet and script to your page:

```html
<link rel="stylesheet" href="style.css" />
<script defer src="script.js"></script>
```

Wrap a set of related cards in a container with the `.ease-snap-focus` utility class.

## Usage examples
```html
<section class="ease-snap-focus">
  <article class="card" tabindex="0">Alpha</article>
  <article class="card" tabindex="0">Bravo</article>
  <article class="card" tabindex="0">Charlie</article>
</section>
```

## CSS variable customization
Use these variables to tune the experience:

- `--ease-snap-distance`: how far nearby cards are pulled
- `--ease-snap-scale`: the active card scale amount
- `--ease-snap-duration`: animation speed
- `--ease-snap-easing`: easing curve for the motion

## Browser compatibility
The implementation uses standard DOM events and CSS transforms, making it compatible with modern evergreen browsers.

## Accessibility considerations
The effect works for keyboard users through `:focus-visible` and disables motion for users who prefer reduced motion.

## Performance notes
The interaction is dependency-free and uses transforms only, so the animation is lightweight and avoids layout thrashing.

## Future enhancement ideas
Possible extensions include directional attraction based on pointer position, grouped item clustering, and support for nested interactive panels.
