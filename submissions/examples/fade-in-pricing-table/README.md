# Fade-In Pricing Table

A complete responsive pricing section that introduces glassmorphism cards with a staggered CSS fade-in sequence.

## Purpose

The component demonstrates an entrance animation that adds hierarchy without moving the page structure around after the initial reveal. Each pricing card begins slightly lower, softer, and more transparent before settling into its final position.

The motion is deliberately short and predictable. The cards are still ordinary semantic HTML, so the interface remains useful when animation is disabled.

## File structure

```text
fade-in-pricing-table/
├── demo.html
├── style.css
└── README.md
```

## Features

- Three detailed pricing tiers.
- Supporting descriptions and feature lists.
- Staggered `@keyframes card-enter` timing.
- Combined opacity, blur, translation, and scale for the reveal.
- Hover and focus states after entrance.
- Motion-sequence guide above the cards.
- Supporting motion-principles section below the cards.
- Responsive desktop, tablet, and mobile layout.
- No JavaScript or external dependencies.
- Reduced-motion support removes the entrance animation.

## Usage

Open `demo.html` directly in a browser. The component can be embedded by copying the `.plans` section and loading `style.css`.

A card uses this general structure:

```html
<article class="card">
  <div class="card__top">
    <span class="index">01</span>
    <div>
      <p class="name">Starter</p>
      <p class="summary">For focused individual work.</p>
    </div>
  </div>
  <p class="price">$9 <small>/ month</small></p>
  <a class="card__action" href="#starter">Choose Starter</a>
</article>
```

## Animation sequence

The first card starts immediately. The second card waits `130ms`, and the third waits `260ms`.

This small delay is enough to create a readable sequence without making the user wait for the interface to become usable.

The keyframes begin with:

- `opacity: 0`
- a small downward translation
- a slightly reduced scale
- a short blur

The final state returns the card to normal opacity, position, scale, and blur.

## Motion implementation

The core animation is:

```css
@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
    filter: blur(7px);
  }

  60% {
    opacity: 1;
    filter: blur(0);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
```

The animation is assigned to each card with `animation-fill-mode: both` through the shorthand. This prevents the cards from flashing into their final position before their individual delays begin.

## Why use staggered timing?

A simultaneous reveal makes all cards compete for attention. Staggering creates a natural reading direction from the first plan to the last.

The delays are intentionally small. A pricing section should not feel like a presentation sequence where the user must wait for every element to finish.

## Interaction after entrance

The entrance animation is only one part of the component. Once the cards have settled, hover and keyboard focus use a separate short transition.

The interaction lifts the active card by a few pixels and increases its border emphasis. The content itself does not move independently, which keeps the price and CTA stable.

## Customization

The main visual tokens live in `:root`.

| Token | Purpose |
| --- | --- |
| `--bg` | Page background |
| `--glass` | Base glass surface |
| `--glass-strong` | Stronger glass surface |
| `--border` | Card border |
| `--border-soft` | Divider color |
| `--text` | Primary text |
| `--muted` | Supporting text |
| `--subtle` | Metadata text |
| `--violet` | Primary accent |
| `--violet-light` | Light accent |
| `--cyan` | Secondary accent |
| `--ease` | Shared easing curve |

### Changing the delay

Adjust the `animation-delay` values on the second and third cards. A larger interval makes the sequence more obvious; a smaller interval makes the cards feel almost simultaneous.

### Changing the reveal distance

Change `translateY(24px)` in the keyframes. A smaller value creates a restrained fade, while a larger value makes the cards visibly travel into place.

### Changing the softness

The starting `blur(7px)` controls the initial softness. Avoid excessive blur because large filter values can become expensive and may reduce visual clarity.

## Responsive behavior

Desktop uses three equal columns. At the tablet breakpoint the cards stack vertically so each plan receives enough horizontal space.

The motion-principles section also becomes a single column on smaller screens. The page padding and card padding are reduced for narrow devices.

## Accessibility

Pricing content uses semantic HTML. Links are native anchors and have visible keyboard focus indicators.

No information depends on the animation. The plan name, price, features, and action remain available even if animation is unavailable.

Reduced motion is explicitly supported:

```css
@media (prefers-reduced-motion: reduce) {
  .card {
    opacity: 1;
    animation: none;
    transition: none;
  }
}
```

This ensures the cards are immediately visible rather than being left at their animation start state.

## Performance considerations

The reveal uses a small number of cards and a short animation. The main animated properties are transform and opacity, with blur used only during the short entrance.

The example does not run a permanent animation loop. After the cards finish entering, they remain static until the user interacts with them.

## Testing checklist

- Open `demo.html` directly.
- Confirm all three cards appear in sequence.
- Hover each card after the entrance completes.
- Tab through all CTA links.
- Resize to a tablet width.
- Resize to a narrow mobile width.
- Enable reduced motion and reload the page.
- Confirm cards are immediately visible with motion disabled.

## Design principles

1. Motion should clarify hierarchy.
2. Delays should remain short.
3. Content must remain usable without animation.
4. Entrance and interaction motion should be separate.
5. Responsive layout should not depend on motion.
6. Reduced-motion preferences must be respected.
7. The component should remain dependency-free.

## Browser considerations

The example uses standard CSS grid, flexbox, gradients, custom properties, backdrop blur, keyframes, and media queries. Browsers without backdrop blur still receive a translucent card because the background and border remain visible.

## License

This example is intended as a self-contained EaseMotion CSS showcase and follows the repository contribution guidelines.
