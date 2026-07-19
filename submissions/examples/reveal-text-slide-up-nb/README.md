# Reveal Text Slide Up

A premium CSS animation example demonstrating a progressive text reveal pattern using `overflow: hidden` and `translateY` transforms, built for the EaseMotion CSS library.

## What does this do?

This example provides a reusable CSS pattern where secondary text remains completely hidden until the parent element is hovered, then smoothly slides upward into view. The effect is achieved by combining `overflow: hidden` on the parent wrapper with `transform: translateY(100%)` on the child text element, creating a clean clipping mask that reveals the text as it translates upward.

The demo showcases the effect across multiple real-world use cases including feature cards, button subtitles, image captions, portfolio items, and dashboard widgets — all styled with a modern, premium aesthetic.

## How is it used?

### Basic usage

Wrap any secondary text in a parent container with `overflow: hidden`, then apply the reveal class to the child:

```html
<div class="reveal-wrapper">
  <p>Primary visible content</p>
  <p class="ease-reveal-text">Hidden secondary text that slides up on hover</p>
</div>
```

### Required parent style

```css
.reveal-wrapper {
  overflow: hidden;
}
```

The `overflow: hidden` property clips the child element's content at the parent's bounding box. Without it, the translated text would remain visible outside the parent area.

### Child initial state

```css
.ease-reveal-text {
  transform: translateY(100%);
  transition: transform 0.4s ease-out;
}
```

The child starts at `translateY(100%)`, positioning it one full element-height below its natural position — entirely outside the parent's visible area.

### Hover behavior

```css
.reveal-wrapper:hover .ease-reveal-text {
  transform: translateY(0);
}
```

When the parent is hovered, the child transitions to `translateY(0)`, moving it to its natural position. The `0.4s ease-out` transition creates a smooth, decelerating motion.

## Why is it useful?

- **Space efficiency**: Secondary content doesn't consume layout space until the user expresses interest via hover.
- **Engagement**: The reveal animation creates a tactile, premium feel that rewards user interaction.
- **Zero JavaScript**: Pure CSS means no runtime overhead, no event listeners, and no framework dependencies.
- **Reusable**: The pattern can be applied to any component — cards, buttons, captions, overlays, and more.
- **Accessible**: The animation respects `prefers-reduced-motion` and only activates on hover, which is a pointing-device interaction.

## Animation Overview

| Property              | Value                              |
| --------------------- | ---------------------------------- |
| Parent clipping       | `overflow: hidden`                 |
| Child initial state   | `transform: translateY(100%)`      |
| Child hover state     | `transform: translateY(0)`         |
| Transition property   | `transform`                        |
| Transition duration   | `0.4s`                             |
| Timing function       | `ease-out`                         |
| Activation            | `:hover` pseudo-class on parent    |
| Deactivation          | Hover ends → smooth return to hidden |

## Overflow Clipping Explanation

The `overflow: hidden` property on the parent wrapper is the foundation of this pattern. It creates a clipping context that hides any content extending beyond the parent's dimensions.

- **Without `overflow: hidden`**: The child element at `translateY(100%)` would be visible below the parent, breaking the reveal illusion.
- **With `overflow: hidden`**: The child is clipped at the parent's bottom edge, making it invisible until it translates upward into the visible area.

The clipping is purely visual — the child element still occupies its full layout space and remains interactive.

## Text Reveal Behavior

The reveal animation works in three phases:

1. **Default state**: The child element is positioned at `translateY(100%)`, placing it entirely below the parent's visible area. The `overflow: hidden` on the parent clips it from view.

2. **Hover activation**: When the user hovers over the parent, the child's `transform` changes to `translateY(0)`. The `0.4s` transition interpolates between the two positions, creating a smooth upward slide.

3. **Hover deactivation**: When the user moves the cursor away, the child transitions back to `translateY(100%)`, sliding back down and out of view.

The `ease-out` timing function starts the animation quickly and decelerates toward the end, creating a natural, polished feel that mimics physical motion.

## Responsive Behavior Notes

- The demo uses a fluid layout with `clamp()` for typography and `auto-fit`/`auto-fill` grid properties for adaptive columns.
- On screens narrower than 768px, all grids collapse to single-column layouts.
- On tablet-sized screens (769px–1024px), grids display in two columns.
- The hero section adjusts its minimum height and padding on smaller viewports.
- The hero preview card switches to a stacked layout on screens narrower than 480px.
- All interactive elements remain fully functional at any viewport size.
- The design uses relative units (`rem`, `%`) throughout for proper scaling.

## File Structure

```
submissions/examples/reveal-text-slide-up-nb/
├── demo.html          # Complete showcase page with hero, interactive demo, animation breakdown, and use cases
├── style.css          # All styles including reveal animation, layout, and responsive rules
└── README.md          # This documentation file
```

## Typical UI Use Cases

| Use Case            | Description                                                       |
| ------------------- | ----------------------------------------------------------------- |
| Card captions       | Reveal additional context below card titles on hover              |
| Button subtitles    | Show supplementary info beneath CTAs without cluttering defaults  |
| Product descriptions| Keep product cards minimal while offering on-hover detail access  |
| Portfolio overlays  | Present project metadata on hover in creative showcases           |
| Dashboard widgets   | Expose detailed metrics and analytics on hover                    |
| Gallery items       | Display image titles and descriptions on hover                    |
| Pricing tiers       | Reveal feature highlights beneath pricing cards                   |
| Team bios           | Show extended bio or contact info on hover                        |

## Browser Support

Works in all modern browsers that support CSS 2D transforms and transitions:

- Chrome 4+
- Firefox 3.5+
- Safari 3.1+
- Edge 12+
- Opera 10.5+

## Accessibility

To respect user preferences for reduced motion, the stylesheet includes a `prefers-reduced-motion` media query that disables the transition and keeps the text permanently visible:

```css
@media (prefers-reduced-motion: reduce) {
  .ease-reveal-text {
    transition: none;
  }

  .reveal-wrapper .ease-reveal-text {
    transform: translateY(0);
  }
}
```

This ensures users who prefer reduced motion can still access the secondary content without animation.