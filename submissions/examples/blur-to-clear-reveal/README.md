# Blur-to-Clear Reveal

A lightweight entrance animation where content transitions from blurred and partially transparent to sharp and fully visible.

## Overview

Blur-to-Clear Reveal creates a soft entrance effect by combining three visual properties:

- Opacity
- Blur
- Vertical translation

The element begins slightly blurred, transparent, and offset from its final position. It then settles into a sharp and fully visible state.

The effect works well for:

- Text
- Cards
- Images
- Hero content
- Dashboard sections
- Search results
- Empty states
- Content blocks

## Basic Usage

Apply the `blur-reveal` class to an element:

```html
<div class="blur-reveal">
  <h2>Welcome to EaseMotion</h2>
  <p>Smooth animations made simple.</p>
</div>
```

## CSS

```css
.blur-reveal {
  opacity: 0;

  filter: blur(10px);

  transform:
    translateY(20px);

  animation:
    blurReveal
    0.8s
    ease-out
    forwards;
}

@keyframes blurReveal {

  from {
    opacity: 0;

    filter: blur(10px);

    transform:
      translateY(20px);
  }

  to {
    opacity: 1;

    filter: blur(0);

    transform:
      translateY(0);
  }

}
```

## Customization

The demo exposes CSS custom properties so the effect can be adapted:

```css
.blur-reveal {
  --blur-reveal-blur: 14px;
  --blur-reveal-distance: 24px;
  --blur-reveal-duration: 850ms;

  --blur-reveal-ease:
    cubic-bezier(
      0.22,
      1,
      0.36,
      1
    );
}
```

This makes it possible to create lighter or stronger variants without changing the keyframes.

For example:

```css
.blur-reveal {
  --blur-reveal-blur: 6px;
  --blur-reveal-distance: 10px;
  --blur-reveal-duration: 500ms;
}
```

## Animation Behavior

The effect follows this sequence:

```text
Blurred + Transparent
        ↓
Blur decreases
        ↓
Opacity increases
        ↓
Element moves into place
        ↓
Sharp + Fully visible
```

The animation uses `filter`, `opacity`, and `transform` to create the reveal.

## Accessibility

The animation respects the user's reduced-motion preference:

```css
@media (prefers-reduced-motion: reduce) {
  .blur-reveal {
    animation: none;
  }
}
```

Users who prefer reduced motion will see the content without the animated reveal.

## Design Philosophy

This component follows the EaseMotion CSS principles:

### Human-readable

The `blur-reveal` name directly communicates the visual behavior.

### Animation-first

Motion is the core purpose of the component rather than an additional decoration.

### Composable

The effect can be applied to many different UI elements without requiring changes to their internal structure.

### Lightweight

No JavaScript or external animation library is required for the animation itself.

## Demo

Open `demo.html` directly in a browser.

The **Replay animation** button is included only to demonstrate the effect repeatedly.

The animation itself is entirely CSS-based.

## Files

```text
blur-to-clear-reveal/
├── demo.html
├── style.css
└── README.md
```

## Contribution

This is a proposed EaseMotion CSS example.

The final EaseMotion class naming, tokens, and integration can be standardized by the repository maintainer.
